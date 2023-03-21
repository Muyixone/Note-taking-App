const notesModel = require('../models/notes_model');

const getHomepage = async (req, res, next) => {
  await notesModel.findOne({}).then((result) => {
    res.status(200).json({
      notes: result,
      message: 'Result fetch complete',
    });
  });
};
const getNote = (req, res, next) => {};
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
const updateNote = (req, res, next) => {};
const deleteNote = (req, res, next) => {};

module.exports = {
  getHomepage,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
