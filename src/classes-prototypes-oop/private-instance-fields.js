console.log("Private Instance Fields");

class UserCreator {

  // this property is being added to the hidden [[fields]]
  // in the "this" object
  // stored in private element properties
  #score;

  constructor(name, score) {
    this.name = name;
    this.#score = score;
  }

  increment() {
    this.#score++;
  }

  login() {
    this.loggedIn = true;
  }
}

const userOne = new UserCreator("Xiao", 3);
userOne.increment();