// Nested loop with nested array example
const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; j < nestedArray[i].length; j++) {
    console.log(nestedArray[i][j]);
  }
}
