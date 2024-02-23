// Create an array
let originalArray = [1, 2, 3, 4, 5];

// Assign the array to a new variable
let newArray = originalArray;

// Modify the original array
originalArray.push(6);

console.log(originalArray); // Output: [1, 2, 3, 4, 5, 6]
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

// Modify the new array
newArray.pop();

console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(newArray); // Output: [1, 2, 3, 4, 5]
