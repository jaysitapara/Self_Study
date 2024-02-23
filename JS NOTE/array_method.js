// Array Methods:

// => length:
//     - Returns the number of elements in an array.
const arr = [1, 2, 3];
console.log(arr.length); // Output: 3

// => concat(arr1, arr2, ...):
//     - Combines two or more arrays, creating a new array.
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Output: [1, 2, 3, 4]

// => push(element1, element2, ...):
//     - Adds one or more elements to the end of an array and returns the new length.
const arr3 = [1, 2];
arr3.push(3, 4);
console.log(arr3); // Output: [1, 2, 3, 4]

// ... rest of the array methods ...
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// length
console.log(arr1.length); // Output: 3

// concat
const combinedArray = arr1.concat(arr2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// push
arr1.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]

// pop
const poppedElement = arr1.pop();
console.log(poppedElement); // Output: 4
console.log(arr1); // Output: [1, 2, 3]

// unshift
arr1.unshift(0);
console.log(arr1); // Output: [0, 1, 2, 3]

// shift
const shiftedElement = arr1.shift();
console.log(shiftedElement); // Output: 0
console.log(arr1); // Output: [1, 2, 3]

// indexOf
const index = arr1.indexOf(2);
console.log(index); // Output: 1

// lastIndexOf
const lastIndex = arr1.lastIndexOf(2);
console.log(lastIndex); // Output: 1

// slice
const slicedArray = arr1.slice(1, 3);
console.log(slicedArray); // Output: [2, 3]

// splice
arr1.splice(1, 1, 5);
console.log(arr1); // Output: [1, 5, 3]

// reverse
arr1.reverse();
console.log(arr1); // Output: [3, 5, 1]

// sort
arr1.sort();
console.log(arr1); // Output: [1, 3, 5]

// forEach
arr1.forEach((element) => {
  console.log(element);
});
// Output:
// 1
// 3
// 5

// map
const mappedArray = arr1.map((element) => element * 2);
console.log(mappedArray); // Output: [2, 6, 10]

// filter
const filteredArray = arr1.filter((element) => element > 2);
console.log(filteredArray); // Output: [3, 5]

// reduce
const reducedValue = arr1.reduce((accumulator, element) => accumulator + element, 0);
console.log(reducedValue); // Output: 9

// join
const joinedString = arr1.join("-");
console.log(joinedString); // Output: "1-3-5"

// isArray
console.log(Array.isArray(arr1)); // Output: true
console.log(Array.isArray("not an array")); // Output: false
