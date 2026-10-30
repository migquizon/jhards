console.log("Function Scope Backpack");

function outer() {
  let counter = 0;
  function backpack() {
    counter++;
  }
  return backpack;
}

// the backpack here is the local memory returned
// from calling the backpack stored to newBackpack
// when the outer function popped from the call stack
// local memory including the counter is erased
// but JavaScript attached a backpack to the function definition
// so when it looks up to the global memory it's not found but 
// in the "backpack" 
// 
// when a function defined inside another function's execution context
// is returned, a hidden bond with the surrounding data of this
// parent execution context, a backpack or closure, it persists
// even after the parent execution context is popped off or removed from
// the call stack, is also attached to the 
// returned function beside it's definition

const newBackpack = outer();
newBackpack();