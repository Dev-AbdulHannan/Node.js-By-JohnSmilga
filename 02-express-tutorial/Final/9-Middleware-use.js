/* The purpose of this file is to showcase that if there are alot of routes how we can use app.use function 
   to setup middleware instead of setting it up manually in every route. App.use() will include middleware in all routes
   */

const express = require("express");
const app = express();
const logger = require("./Logger"); //Middleware
const authorize = require("./Authorize"); //Middleware

app.use([logger, authorize]); // IF we setup the path(/api) here, it gonna apply to every route after this api
// api/home/about/products=> we can specify the path

//  req => middleware => res

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/products", (req, res) => {
  res.send("Products");
});

app.listen(2000, () => {
  console.log("Server is listening on port 2000....");
});
