const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password_hash');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updates = req.body;
    updates.updated_at = Date.now();
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};