console.log("Prototypes Object Create");

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  // this returns an empty object with a hidden link to userFunctionStore
  // this allows the lookup of properties linked to the object
  // the hidden link property is named [[Property]]
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () { this.score++; },
  // implicit parameter "this" assigned to the local memory
  // passed to the function, a reference to the object
  login: function() {console.log("logged in")}
}

const userOne = userCreator("Ari", 3);
const userTwo = userCreator("Jae", 5);

userOne.increment();