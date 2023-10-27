/* Streams are used to read and write sequentially
Basically when we have to handle and manipulate streaming data for example 
continuous source or big file streams come in real handy 
*/
/*
There are four different types of streams 
1)Writeable -> Use to write data sequentially
2)Readable -> Use to read data sequentially
3)Duplex -> Use to both read and write data sequentially 
4)Transform -> Data can be modified when writing or reading
*/

//Just like with events many build in modules in Node implements streaming interface. Streams extend Event emitter class

const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync("./Path Demonstration/big.txt", `hello world ${i}\n`, {
    flag: "a",
  });
}
console.log("work done");
