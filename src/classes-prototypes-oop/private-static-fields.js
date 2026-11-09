console.log("Private Static Fields");

class UserCreator {
  static #count = 0;
  // created in a separate hidden space in the User Creator
  // function object combo
  constructor(name, score) {

    if (UserCreator.#count >= 2) {
      throw Error("Max Users Reached");
    }

    this.name = name;
    this.score = score;
    UserCreator.#count++;
  }
  increment() {
    this.score++;
  }
}

const userOne = new UserCreator("Kai", 3);