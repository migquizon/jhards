console.log("Execution Context");

const num = 3;
function multiplyByTwo(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyByTwo(num);
const anotherOutput = multiplyByTwo(10);

console.log(output, anotherOutput);