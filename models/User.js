// server/models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // No two users can have the same email
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'club'], // Role can only be one of these two values
    default: 'student',       // If not specified, the user is a student
  },
  date: {
    type: Date,
    default: Date.now, // Sets the current date when a user is created
  },
});

module.exports = mongoose.model('user', UserSchema);