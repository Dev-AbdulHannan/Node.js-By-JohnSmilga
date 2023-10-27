// The purpose of this program is to demonstrate how we can setup a basic http server using Express.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the server");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});

/************* Famous Methods***************/
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use=>Responsible for Middleware
// app.listen
