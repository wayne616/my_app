const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.token);
    const userId = decodedToken.userId;
    const Admin= decodedToken.Admin;
    req.auth = { userId, Admin};
    if (req.body.userId && req.body.userId !== userId ) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};