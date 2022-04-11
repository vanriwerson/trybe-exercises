// Dada uma matriz, transforme em um array:
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((finalArray, currentArray) => finalArray.concat(currentArray));
}

console.log(flatten());