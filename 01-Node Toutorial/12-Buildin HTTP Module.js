// This module help us to create a Server.
// To run this we need to run localhost:5000 on browser.
//req and res are objects which contains different methods

const http = require("http");
const Server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome to our Home page");
  else if (req.url === "/about") res.end("This is About us page");
  else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

Server.listen(5000);
