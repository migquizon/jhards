console.log("Generate Object Using Function");

function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  }

  return newUser;
}

const userOne = userCreator("Sways", 2);
const userTwo = userCreator("Blue", 4);
userOne.increment();
console.log(userOne.score);