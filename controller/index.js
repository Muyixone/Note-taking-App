const notesModel = require('../models/notes_model');
const objectId = require('mongodb').ObjectId;

const getHomepage = async (req, res, next) => {};

// GET ALL NOTES FROM DATABASE
const getAllNotes = async (req, res, next) => {
  await notesModel
    .find({})
    .then((notes) => {
      return res.status(200).json({ notes });
    })
    .catch((err) => res.status(404).json(err.message));
};

//////////////////
/*
 * Get a single note
 */
//////////////////
const getNoteById = async (req, res, next) => {
  await notesModel.findOne({ _id: req.params.id }).then((result) => {
    if (!result) {
      return res.status(404).json({ message: 'Not Found' });
    }
    return res.status(200).json({
      note: result,
      message: 'Result fetched successfully',
    });
  });
};

////////////
/*
 * CREATE NOTE
 */
///////////
const createNote = async (req, res, next) => {
  // ADD INPUT VALIDATION WITH JOI HERE

  // ==========================
  const { title, description, content } = req.body;
  await notesModel.create({ title, description, content }).then((result) => {
    result.save();
    res.status(200).json({
      note: result,
    });
  });
};

///////////////////
/*
 * UPDATE NOTE
 */
//////////////
const updateNote = async (req, res, next) => {
  const noteId = req.params.id;
  const updateNote = req.body;
  await notesModel
    .findOneAndUpdate({ _id: noteId }, { $set: updateNote }, { new: true })
    .then((result) => {
      return res.status(200).json({
        result,
      });
    })
    .catch((err) => {
      return res.status(500).json({ err: 'No document to update' });
    });
};

///////////////////
/*
 * DELETE NOTE
 */
//////////////
const deleteNote = async (req, res, next) => {
  const id = req.params.id;

  // Check if the id is a valid mongodbid
  objectId.isValid(id);
  try {
    // Check if the id is present in the database before deleting
    const note = await notesModel.findOne({ _id: id });
    if (note) {
      await notesModel.deleteOne({ _id: id });
      return res.status(200).json({ messgae: 'Note deleted' });
    }
    return res.status(404).json({ message: `Note with id: ${id} not Found` });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getHomepage,
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
