console.log("Implement Primitive Coercion");

const userStored = {
  name: "Will",
  id: 105
};

const userSubmitted = {
  name: "Will",
  id: 105
};

function onSubmit() {
  if (+userStored === +userSubmitted) {
    console.log("Success");
  }
}

function coerce() {
  return 105;
}

userStored[Symbol.toPrimitive] = coerce;
userSubmitted[Symbol.toPrimitive] = coerce;

onSubmit();

// JavaScript let us use (but not write) @@toprimitive label
// using 'Symbol' that is stored on a built-in
// refer to them using square brackets and attach the coerce function
// JavaScript so far has hidden objects and features built on it