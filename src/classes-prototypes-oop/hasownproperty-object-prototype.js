console.log("hasOwnProperty and Object Prototype");

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("logged in");
  }
}

const userOne = userCreator("Xann", 1);

console.log(userOne.hasOwnProperty("increment")); // used to check if there's property

// all object has a hidden property named [[Prototype]] that's being chained
// this illustrates that the hidden property of the object has a link to 
// no only the hidden link property [[prototype]] but it's also chained
// to an Object that has a property named prototype containing a hasOwnPropertyMethod