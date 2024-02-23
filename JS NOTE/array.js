// Creating an array
const fruits = ['apple', 'banana', 'orange'];

// Accessing elements in the array
console.log(fruits[0]); // Output: 'apple'

// Modifying elements in the array
fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'orange']

// Adding elements to the array
fruits.push('mango');
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango']

// Removing elements from the array
fruits.pop();
console.log(fruits); // Output: ['apple', 'grape', 'orange']

// Iterating over the array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
