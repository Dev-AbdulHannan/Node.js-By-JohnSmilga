const { createReadStream } = require("fs");

// default size of buffer 64kb..but we can control it
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./Path Demonstration/big.txt', { highWaterMark: 90000 })// we define the chunk size
// const stream = createReadStream('../Path Demonstration/big.txt', { encoding: 'utf8' })
const stream = createReadStream("./Path Demonstration/big.txt");

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));
