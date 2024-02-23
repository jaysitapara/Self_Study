// Example 1: length
const str = "Hello, World!";
console.log(str.length); // Output: 13

// Example 2: charAt
console.log(str.charAt(4)); // Output: o

// Example 3: concat
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(", ", str2)); // Output: Hello, World

// Example 4: indexOf
console.log(str.indexOf("o")); // Output: 4

// Example 5: lastIndexOf
console.log(str.lastIndexOf("o")); // Output: 8

// Example 6: substring
console.log(str.substring(7, 12)); // Output: World

// Example 7: slice
console.log(str.slice(7, 12)); // Output: World

// Example 8: toUpperCase
console.log(str.toUpperCase()); // Output: HELLO, WORLD!

// Example 9: toLowerCase
console.log(str.toLowerCase()); // Output: hello, world!

// Example 10: trim
const str3 = "   Hello, World!   ";
console.log(str3.trim()); // Output: Hello, World!

// Example 11: replace
console.log(str.replace("World", "Universe")); // Output: Hello, Universe!

// Example 12: split
console.log(str.split(", ")); // Output: ["Hello", "World!"]

// Example 13: startsWith
console.log(str.startsWith("Hello")); // Output: true

// Example 14: endsWith
console.log(str.endsWith("World!")); // Output: true

// Example 15: includes
console.log(str.includes("o")); // Output: true
