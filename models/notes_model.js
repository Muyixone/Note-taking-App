const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const noteSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    content: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Note', noteSchema);
