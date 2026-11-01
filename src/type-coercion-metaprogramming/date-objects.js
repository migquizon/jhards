console.log("Date Objects");

const firstDate = new Date();
console.log(firstDate);

setTimeout(function () {
  console.log(new Date());
}, 3000);

firstDate["jan"] = true;