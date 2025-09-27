// server/routes/posts.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Bring in Models
const Post = require('../models/Post');
const User = require('../models/User');

console.log('Is Post a function?', typeof Post); // <-- ADD THIS LINE

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    // We get the user from the DB to get their name
    const user = await User.findById(req.user.id).select('-password');

    const newPost = new Post({
      text: req.body.text,
      name: user.name,
      user: req.user.id,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;