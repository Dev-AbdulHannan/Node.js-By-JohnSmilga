const authorize = (req, res, next) => {
  console.log("authorize");
  next();
};
module.exports = authorize;

// This is just for demonstration purpose. normally what we do is we check for JSON web token
