// config/db.js

const mongoose = require('mongoose');

// This function connects the server to the database
const connectDB = async () => {
  try {
    // We use the MONGO_URI from our .env file
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;