console.log("The new keyword.");

// the new keyword automates the hardwork
// creates a new user object
// return the new user object
//
// how to refer to the auto-created object
// how to know where to put our single copies of functions

// Functions are both objects and functions
//

function multiplyByTwo(num) {
  return num * 2;
}

multiplyByTwo.stored = 5;
multiplyByTwo(3);

console.log(multiplyByTwo.prototype);