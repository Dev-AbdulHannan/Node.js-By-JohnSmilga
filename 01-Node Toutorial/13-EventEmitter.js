/*We Register for specific events and register functions that will execute in response to those 
Events. Many Buildin Modules in Node JS use events under the good and therefore making events and evnt driven 
programming a big part of Node js  */
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received by ${name} with id ${id}`);
});

customEmitter.on("response", () => {
  console.log("Some other logic here");
});

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.emit("response", "john", 34); // it is responding to both events. we can also pass some arguments

// The order matters here we will first listen for the event and then we will emit it.
