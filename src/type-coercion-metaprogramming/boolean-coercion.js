console.log("Boolean Coercion");

const price = 7;
let quantity = "0";
let donation = "10";
let total;

function onSubmit() {
  if (quantity) {
    total = +price * +quantity + +donation;
  } else {
    console.log("Add items!");
  }
}

onSubmit();