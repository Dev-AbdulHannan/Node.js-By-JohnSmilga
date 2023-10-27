// It is middleware function that we will export and use in some other file
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); // we must pass the middleware onto the next route or terminate it here by sending its own response
};
module.exports = logger;
