console.log("Copy and Change an Array");

function copyArrayAndMultiplyby2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyby2(myArray);

// adding parameters to our functions 
// to generalize the function and make it reusable