// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date },
  gender: { type: String },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;