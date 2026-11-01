console.log("Stack Memory Heap Memory");

const userStored = {
  name: "Will",
  id: 105
};

const userSubmitted = {
  name: null,
  id: null
};

function onSubmit() {
  if (userSubmitted === userStored) {
    console.log("Submission success!");
  }
}

// Heap -> non-primitive types // predictable in size
// Stack -> primitive types , reference // flexible 
//  - objects
//  - functions
//  - arrays

const userStoredLink = userStored; // reference stored only

onSubmit();