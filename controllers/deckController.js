const Deck = require('../models/Deck');

exports.createDeck = async (req, res) => {
  try {
    const deck = new Deck({ user_id: req.user.id, name: req.body.name });
    await deck.save();
    res.status(201).json(deck);
  } catch (error) {
    res.status(400).json({ message: 'Error creating deck' });
  }
};

exports.getDeck = async (req, res) => {
  try {
    const deck = await Deck.findById(req.params.id);
    if (!deck) return res.status(404).json({ message: 'Deck not found' });
    res.json(deck);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteDeck = async (req, res) => {
  try {
    await Deck.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deck deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};