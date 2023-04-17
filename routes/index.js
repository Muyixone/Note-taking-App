const express = require('express');
const {
  getAllNotes,
  getNoteById,
  getCreateNotePage,
  createNote,
  updateNote,
  deleteNote,
} = require('../controller/index');

const router = express.Router();

router
  .get('/', getAllNotes)
  .get('/createNote', getCreateNotePage)
  .post('/', createNote)
  .put('/:id', updateNote)
  .delete('/:id', deleteNote)
  .get('/:id', getNoteById);

module.exports = router;
