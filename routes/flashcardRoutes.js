const express = require('express');
const router = express.Router();
const { addFlashcard, getFlashcards, deleteFlashcard } = require('../controllers/flashcardController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/:deck_id/flashcards', authMiddleware, addFlashcard);
router.get('/:deck_id/flashcards', authMiddleware, getFlashcards);
router.delete('/flashcards/:id', authMiddleware, deleteFlashcard);

module.exports = router;