console.log("Asynchronous Code Overview");

// core JavaScript main parts
// - thread of execution
// - memory
// - call stack
// other components
// - web browser
// - promises
// - event loop
// - callback task
// - micro task
//

function hello() {
  console.log("hello");
}

setTimeout(hello, 0);

console.log("hmm?");