console.log("Coercion Rules Operators");

const userStored = {
  name: "Will",
  id: 105
};

const userSubmitted = {
  name: null,
  id: null
};

function onSubmit() {
  if (userSubmitted == userStored) {
    console.log("Submission success!");
  }
}

onSubmit();