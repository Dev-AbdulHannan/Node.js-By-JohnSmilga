const express = require("express");
const app = express();
const morgan = require("morgan"); //Third party middleware
const logger = require("./Logger");
const authorize = require("./Authorize");
//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))..Buildin middleware by the name of static
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
