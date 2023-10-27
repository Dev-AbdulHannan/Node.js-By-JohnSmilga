const express = require("express");
const app = express();
const { products } = require("../data");
app.get("/", (req, res) => {
  // res is an object which has the JSON Method
  res.json(products);
});

app.listen(2000, () => {
  console.log("Server is listening on port 2000....");
});
