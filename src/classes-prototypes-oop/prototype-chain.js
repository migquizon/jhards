console.log("Prototype Chain");

// Objects created through function is costly for the memory
//
// Using protoype chain
// - store a function in an object
// - link the object to the function using Object.create()
//

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore); // creates a hidden bond 
  // with the object that contains the functions / methods for this object.
  // allows prototype chain > allows look up of properties
  // on linked objects when not found in original object 
  // without the error
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () { this.score++; },
  login: function () { console.log("Logged in"); }
}

const userOne = userCreator("Ari", 3);
const userTwo = userCreator("Jae", 5);
userOne.increment();