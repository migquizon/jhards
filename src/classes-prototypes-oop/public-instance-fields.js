console.log("Public Instance Fields");

class UserCreator {
  // hidden property [[fields]] of userCreator obj for loggedIn
  loggedIn = false;
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    this.loggedIn = true;
  }
}

const userOne = new UserCreator("Ari", 3);
userOne.login();