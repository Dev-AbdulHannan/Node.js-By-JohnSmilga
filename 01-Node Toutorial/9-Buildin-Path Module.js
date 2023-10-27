const path = require("path");

console.log(path.sep);

const filePath = path.join("Path Demonstration", "subfolder", "test.txt"); // It returns the normalized path
console.log(filePath);

const basepath = path.basename(filePath); // it gives the base path
console.log(basepath);

const absolute = path.resolve(
  // it will give us the absolute path
  __dirname,
  "Path Demonstration",
  "subfolder",
  "test.txt"
);

console.log(absolute);
