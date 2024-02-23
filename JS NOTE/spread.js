// Example 1: Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 2: Copying arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// Example 3: Passing arguments to a function
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); // Output: 6

// Example 4: Creating a new object
const obj1 = { name: 'John' };
const obj2 = { age: 25 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { name: 'John', age: 25 }
