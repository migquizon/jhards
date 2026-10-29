console.log("Pass a function as an argument.");

function copyArrayAndManipulate(array, operation) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(operation(array[i]));
  }
  return output;
}

function operationAddition(inputNum) {
  return inputNum + 2;
}

function operationSubtraction(inputNum) {
  return inputNum - 2;
}

function operationMultiplication(inputNum) {
  return inputNum * 2;
}

function operationDivision(inputNum) {
  return inputNum / 2;
}

const testArr = [2, 3, 5];
console.log(copyArrayAndManipulate(testArr, operationAddition));
console.log(copyArrayAndManipulate(testArr, operationSubtraction));
console.log(copyArrayAndManipulate(testArr, operationMultiplication));
console.log(copyArrayAndManipulate(testArr, operationDivision));