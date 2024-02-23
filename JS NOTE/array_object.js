// Define an array of objects
const students = [
  { name: "John", age: 20, grade: "A" },
  { name: "Jane", age: 22, grade: "B" },
  { name: "Mike", age: 21, grade: "A+" }
];

// Accessing objects in the array
console.log(students[0].name); // Output: John
console.log(students[1].age); // Output: 22
console.log(students[2].grade); // Output: A+

// Modifying objects in the array
students[0].grade = "B";
console.log(students[0].grade); // Output: B

// Adding objects to the array
students.push({ name: "Sarah", age: 19, grade: "A-" });
console.log(students.length); // Output: 4
console.log(students[3].name); // Output: Sarah
