// We can use modules in other files of the program to include their functioality
// CommonJS(library), every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-Names");
const sayHi = require("./5-Utils");
const different = require("./6-Alternative falvor");
require("./7-Mind Gernade"); // IT will directly execute

sayHi("susan");
sayHi(names.F_Name);
sayHi(names.L_Name);

console.log(names); // Return an complete object with First and Last name
