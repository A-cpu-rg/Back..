const express = require('express');
const router = express.Router();
const { getUser, updateUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:id', authMiddleware, getUser);
router.put('/:id', authMiddleware, updateUser);

module.exports = router;