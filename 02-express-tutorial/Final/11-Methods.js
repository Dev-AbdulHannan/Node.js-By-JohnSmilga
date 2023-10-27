//We group the routes together using express router
const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

//static assets
app.use(express.static("./public/Methods-public"));

//Buildin Middleware
app.use(express.urlencoded({ extended: false })); //to use the data whatever being send

app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

//************************************************************************************/

app.listen(2000, () => {
  console.log("server is listening on port 2000");
});
