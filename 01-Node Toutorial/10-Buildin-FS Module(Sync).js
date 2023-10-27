// This build in module will read the file, create the file and append the existing file

const { readFileSync, writeFileSync } = require("fs");
const { default: test } = require("node:test");
const { start } = require("repl");

//console.log(start());

const first = readFileSync("./Path Demonstration/subfolder/test.txt", "utf8");
const second = readFileSync(
  "./Path Demonstration/subfolder/second.txt",
  "utf8"
);
console.log(first);
console.log(second);

writeFileSync(
  "./Path Demonstration/subfolder/Third.txt",
  "THIS IS created and written USING WRITE FILE SYNC",
  { flag: "a" }
);
