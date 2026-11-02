console.log("Promises Overview");

// two-pronged facade functions :
// - initiate background web browser work
// - return a placeholder object immediately
// 
function display(data) {
  console.log(data);
}

const futureData = fetch("https://dog.ceo/api/breeds/image/random");

futureData.then(display);

console.log("Me First!");