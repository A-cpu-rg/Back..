const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  deck_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Deck', required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  last_reviewed_at: { type: Date, default: null },
});

module.exports = mongoose.model('Flashcard', flashcardSchema);  

