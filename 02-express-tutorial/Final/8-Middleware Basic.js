// The purpose of this program is to showcase how basic middleware function works

/*Express Middlewares are the functions that executes during the request to the server.Each middleware
function has access to request and response object and when it comes to functionality literally sky is the limit 
Middleware are literally everywhere in express. Midlleware sits in between req and res cyclereq => (middleware => res)
*/

const express = require("express");
const app = express();

// Middleware Function
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); // we must pass it onto the next function
};

//  req => middleware => res
app.get("/", logger, (req, res) => {
  //Logger is a middleware function here. Which has access to both req and res object
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
