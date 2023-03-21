const express = require('express');
const {
  getHomepage,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require('../controller/index');

const router = express.Router();

router
  .get('/', getHomepage)
  .post('/', createNote)
  .put('/:id', updateNote)
  .delete('/:id', deleteNote)
  .get('/:id', getNote);

module.exports = router;
