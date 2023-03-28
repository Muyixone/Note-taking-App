const notesModel = require('../models/notes_model');

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

//Get a single note
const getNoteById = async (req, res, next) => {
  await notesModel.findOne({ _id: req.params.id }).then((result) => {
    return res.status(200).json({
      note: result,
      message: 'Result fetched successfully',
    });
  });
};
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
const deleteNote = (req, res, next) => {};

module.exports = {
  getHomepage,
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
