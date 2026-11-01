console.log("Math Operator Type Coercion");

const price = 7;
let quantity = "3";
const max = 10;
let total;

function onSubmit() {
  total = price * quantity;
  if (quantity < max) { // relational operator kicks off coercion
    console.log("All good!");
  }
}

// + / - unary operator or Number() to enforce number coercion
// String() `${}` to kick off string coercion

onSubmit();