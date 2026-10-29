console.log("Non Mutating Array Methods");

const numArr = [2, 3, 5].reverse();
console.log(numArr.toReversed()); // to reversed does not mutate this array
console.log(numArr.reverse());
console.log(numArr);

const mixArr = [
  1,
  { name: "servero" },
  2
];

console.log(mixArr);

const deepArray = [1, 2, [1, 4, 5], 10];
const flattenedArr = deepArray.flat();

console.log(flattenedArr);

const lastEvenIndex = flattenedArr.findLastIndex(x => x % 2 === 0);

console.log(lastEvenIndex);

function oddOrEvenSelector(num) {
  return num % 2 === 0 ? "even" : "odd";
}

const groupedArr = Object.groupBy(flattenedArr, oddOrEvenSelector);

console.log(groupedArr);