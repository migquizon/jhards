console.log("Promises and Fetch API");

function display(data) {
  console.log(data.json().then(function (dogURL) {console.log(dogURL.message)}));
}

const futureData = fetch("https://dog.ceo/api/breeds/image/random");

futureData.then(display);

// futureData results to Promise object
// it has a result property
// it has also hidden property such fulfill, reject (array)
// which are hidden properties
// that can be only access through .then method
// the result property holds the data returned from the network request
// passed as an argument to the function passed to fulfilled hidden property 
// which is actually triggered automatically

console.log("Me First");