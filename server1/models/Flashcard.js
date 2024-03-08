const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  language: { type: mongoose.Schema.Types.ObjectId, ref: 'Language', required: true },
  front: { type: String, required: true },
  back: { type: String, required: true },
  notes: String
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);
module.exports = Flashcard;