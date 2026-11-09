console.log("The class keyword");

// syntactic sugar for the steps
// defining a method through the prototype property
class UserCreator {
  static describe() {
    console.log("create users");
  }
  loggedIn = false;
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() { // we define a method inside the prototype property object
    this.score++;
  }

  login() {
    console.log("login");
  }
}

const userOne = new UserCreator("Jean", 3);
userOne.login();
console.log(userOne.loggedIn);
UserCreator.describe();