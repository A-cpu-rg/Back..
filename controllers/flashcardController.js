const Flashcard = require('../models/Flashcard');

exports.addFlashcard = async (req, res) => {
  try {
    const flashcard = new Flashcard({ deck_id: req.params.deck_id, ...req.body });
    await flashcard.save();
    res.status(201).json(flashcard);
  } catch (error) {
    res.status(400).json({ message: 'Error adding flashcard' });
  }
};

exports.getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find({ deck_id: req.params.deck_id });
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteFlashcard = async (req, res) => {
  try {
    await Flashcard.findByIdAndDelete(req.params.id);
    res.json({ message: 'Flashcard deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};