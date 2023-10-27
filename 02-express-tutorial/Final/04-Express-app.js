const express = require("express");
const app = express();
//The Path module provides a way of working with directories and file paths.
const path = require("path");

//setup static and middleware
app.use(express.static("./public/Navbar-app")); //=> express.static is a buildin middleware.it is serving all our static assts

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Navbar-app/index.html")); //=> we are sending the file
});
//1)Added to static asset(public/Navbar)
//2) SSR
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
