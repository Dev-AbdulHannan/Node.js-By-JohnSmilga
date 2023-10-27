// This is same as file no 4. Here we are using all the files present in static asset folder
const express = require("express");
const app = express();
const path = require("path");

//setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../navbar-app/index.html"));
// }); =>
//1)Adding to static asset
//2) SSR
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
