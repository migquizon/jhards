console.log("Create JavaScript Objects");

const user = {
  name: "Ari",
  score: 3,
  increment: function () {
    user.score++;
  }
}

user.increment();

const userOne = {};

userOne.name = "Daph";
userOne.score = 0;
userOne.increment = function () {
  userOne.score++;
}

// creates an Object without a prototype
// or an empty Object that doesn't inherit from Object.prototype
const userTwo = Object.create(null);

userTwo = "Abbie";
userTwo.score = 10;
userTwo.increment = function () {
  userTwo.score++;
}