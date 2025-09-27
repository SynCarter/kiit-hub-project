// server/middleware/auth.js

const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // 1. Get token from the header
  const token = req.header('x-auth-token');

  // 2. Check if token doesn't exist
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // 3. If token exists, verify it
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Attach the user payload to the request object
    next(); // Move on to the next piece of middleware or the route handler
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};