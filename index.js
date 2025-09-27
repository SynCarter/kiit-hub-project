// index.js

const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

// Connect to Database
connectDB();

const app = express();

// Init Middleware to accept JSON data <-- IMPORTANT: ADD THIS
app.use(express.json({ extended: false }));

// Define Routes <-- IMPORTANT: ADD THIS
app.use('/api/users', require('./routes/users'));

// in index.js
app.use('/api/posts', require('./routes/posts'));

const PORT = 5000;

// You can remove the console.log for the URI now if you want
// console.log('Connecting with URI:', process.env.MONGO_URI);

app.get('/', (req, res) => {
  // Let's change this message to avoid confusion
  res.send('API is Running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});