console.log("Primitive Coercion");

const firstTime = new Date();
console.log(firstTime)

const secondTime = new Date(); 

const month = "Jan";
firstTime[month] = true;
secondTime[month] = true;

// @@toPrimitive property -> hidden property on the Date object
// JS looks for this to kickoff primitive coercion
if (secondTime - firstTime < 2000) {
  console.log("Accident? too soon submission");
}