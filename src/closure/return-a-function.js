console.log("Return a function");

function createFunction() {
  function multiplyByTwo(num) {
    return num * 2;
  }

  return multiplyByTwo;
}

const generatedFunction = createFunction();
const result = generatedFunction(4);

console.log(generatedFunction);