// Constant Array Reference
const numbers = [1, 2, 3];
numbers.push(4); // Valid, modifies the contents of the array
console.log(numbers); // Output: [1, 2, 3, 4]

// Immutable Array
const immutableNumbers = Object.freeze([1, 2, 3]);
immutableNumbers.push(4); // Invalid, cannot modify the array
console.log(immutableNumbers); // Output: [1, 2, 3]
