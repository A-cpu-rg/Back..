const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password_hash')) {
    const salt = await bcrypt.genSalt(10);
    this.password_hash = await bcrypt.hash(this.password_hash, salt);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
