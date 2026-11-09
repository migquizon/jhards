console.log("Refactor userCreator with the new Keyword");

function userCreator(name, score) {
  // new keyword created the object in memory 
  // an empty object
  // this keyword now points to that empty object
  // but this also has a prototype reference 
  // to the prototype property of the object
  this.name = name;
  this.score = score;
}

userCreator.prototype; // function as object has a prototype object property
userCreator.prototype.increment = function () { // create a property on the prototype
  this.score++;
}

const userOne = new userCreator("Ari", 3); 