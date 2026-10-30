console.log("Calling a function within function");

function outer() {
  let counter = 0;
  function add() {
    counter++;
    console.log(counter);
  }
  return add;
}

const addFunc = outer();
addFunc();
addFunc();
addFunc();
