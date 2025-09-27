// server/models/Post.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user', // This creates a link to the User model
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String, // We'll store the name of the user who posted
  },
  // We can add likes, comments, etc. here later
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('post', PostSchema);