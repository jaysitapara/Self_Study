// Example 1: Basic template literal
const name = 'John';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!

// Example 2: Multiline template literal
const message = `
  This is a multiline
  string using template literals.
  It allows for easy formatting
  and readability.
`;
console.log(message);
/*
Output:
This is a multiline
string using template literals.
It allows for easy formatting
and readability.
*/

// Example 3: Expression interpolation
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.
