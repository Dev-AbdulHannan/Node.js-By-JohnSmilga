const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./Path Demonstration/test.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./Path Demonstration/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./Path Demonstration/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
