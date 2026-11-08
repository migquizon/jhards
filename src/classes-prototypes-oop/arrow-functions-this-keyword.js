console.log("Arrow Functions and this keyword");

// Object.create(), the newly created object's hidden [[Prototype]]
// property points to the object passed as an argument
// rather than directly to Object.prototype
// prototype property points to Object.prototype by default
//

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore); // 1
  newUser.name = name;
  newUser.score = score;
  return newUser; // 2
}

const userFunctionStore = {
  // increment: function () {
  //   function addOne() {
  //     this.score++;
  //   }
  //   addOne();
  // }
  increment: function () {
    const addOne = () => {
      this.score++;
    }
    addOne();
  }
}

const userOne = userCreator("Chan", 5);

// this -> an implicit parameter automatically created 
// when a function is called as method on an object