console.log("Symbols Metaprogramming");

const userStored = {
  name: "Will",
  id: 105
};

const userSubmitted = {
  name: "Will",
  id: 105
};

function coerce(hint) {
  if (hint === "string") {
    return "Will";
  }

  if (hint === "number") {
    return 105;
  }
}

userStored[Symbol.toPrimitive] = coerce;
userSubmitted[Symbol.toPrimitive] = coerce;

console.log(+userStored);

function onSubmit() {
  if (+userStored === +userSubmitted) {
    console.log("Success");
  }
}

onSubmit();

// Symbols - feature for adding semi-hidden properties to objects
// This give us access to under-the-hood features of the language
// - coercion, iterators, async features of classes
// these benefits us for predictability and explicit handling