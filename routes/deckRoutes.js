const express = require('express');
const router = express.Router();
const { createDeck, getDeck, deleteDeck } = require('../controllers/deckController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createDeck);
router.get('/:id', authMiddleware, getDeck);
router.delete('/:id', authMiddleware, deleteDeck);

module.exports = router;