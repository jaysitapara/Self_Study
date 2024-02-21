// console.log("JAY SITAPARA");
// ----------------------------------------------------------------------------------------------------------
// variables in JS
// let a = 10;
// let b = 5;
// sum = a + b;
// console.log("sum of a and b is",sum);
// ----------------------------------------------------------------------------------------------------------
// Datatypes in JS
// let num = 10
// let bool = true
// let str = "jay sitapara"
// let undf = undefined
// let nl = null
// console.log(typeof(num))
// console.log(typeof(bool))
// console.log(typeof(str))
// console.log(typeof(undf))
// console.log(typeof(nl))
// ----------------------------------------------------------------------------------------------------------
// template literals
// let pencilPice = 10;
// let erasorPrice = 5;
// let output1 = "The total price is : " + (pencilPice + erasorPrice) + " Rupees";
// let output = `The total price is : ${pencilPice + erasorPrice} rupees`; //with backticks
// console.log(output1);
// console.log(output);
// ----------------------------------------------------------------------------------------------------------
// operator in JS
//Ariyhmatic operators
// let a = 10;
// let b = 5;
// console.log(a + b); //addition
// console.log(a - b); //substraction
// console.log(a * b); //multiplication
// console.log(a / b); //division
// console.log(a % b); //modulo
// console.log(a ** b); //power
// console.log(b = a); //assignment operator
// console.log(b);
// ----------------------------------------------------------------------------------------------------------

// Assignment operator
// let age = 10;
// console.log(age += 1)
// console.log(age -= 1)
// console.log(age *= 1)
// console.log(age /= 1)
// ----------------------------------------------------------------------------------------------------------
//unnary operator
// let a = 10;
// let b = 10;
// console.log(a++);
// console.log(--b);
// ----------------------------------------------------------------------------------------------------------
//Boolean operator
// let a = true
// let b = false
// console.log(a)
// console.log(b)
// ----------------------------------------------------------------------------------------------------------
//comparison operator
// let age = 18;
// console.log(age > 18); //false
// console.log(age >= 18); //true
// console.log(age < 18); //false
// console.log(age <= 16); //false
// console.log(age == 18); //true
// console.log(age != 18); //flase
// 0 == ' ';    //true bcs blank value
// a = 10;
// str = "10";
// console.log(a == str); //compare only value, not compare type
// console.log(a === str); //compare value and type
// ----------------------------------------------------------------------------------------------------------
//comparison for non-number ( compare with unicode )
// console.log("a" > "A");
// console.log("a" > "b");
// console.log("b" < "c");
// console.log("B" < "C");
// ----------------------------------------------------------------------------------------------------------
//conditional statement
// if statement
// let age = 23;
// if ((age = 18)) {
//   console.log("you can vote");
// }
// ----------------------------------------------------------------------------------------------------------
// ex
// let firstName = 'jay'
// if (firstName == 'jay') {
//     console.log(`welcome ${firstName}`)
// }
// ----------------------------------------------------------------------------------------------------------
//traffic light using code
// let color = "red";
// if (color === "red") {
//   console.log(`light color is ${color}`);
// }
// if (color === "yellow") {
//   console.log(`light color is ${color}`);
// }
// if (color === "green") {
//   console.log(`light color is ${color}`);
// }
// ----------------------------------------------------------------------------------------------------------
//else if statement
// age = 14;
// if ((age = 14)) {
//   console.log("you can vote");
// } else if (age < 18) {
//   console.log("you can not vote");
// }
// ----------------------------------------------------------------------------------------------------------
//else statement
// let age = 18;
// if (age >= 18) {
//     console.log("you can vote")
// } else {
//     console.log("you can not vote")
// }
// ----------------------------------------------------------------------------------------------------------
// else if statement
// let color = "red";
// if (color === "red") {
//   console.log("stop");
// } else if (color === "green") {
//   console.log("slow down");
// } else if (color === "yellow") {
//   console.log("go");
// }
// else{
//     console.log("traffic light is broken")
// }
// ----------------------------------------------------------------------------------------------------------
//nested if-else statement
// let marks = 45;
// if (marks >= 33) {
//   console.log("Pass");
//   if (marks >= 80) {
//     console.log("o")
//   } else {
//     console.log("a")
//   }
// } else {
//   console.log("Fail");
// }
// ----------------------------------------------------------------------------------------------------------
//logical operator
//logical AND
// let marks = 90;
// if (marks >= 33 && marks >= 80) {
//   console.log("Pass");
// }
// ----------------------------------------------------------------------------------------------------------
// locical OR
// let marks = 90;
// if (marks >= 33 || marks >= 80) {
//   console.log("Pass");
// }
// ----------------------------------------------------------------------------------------------------------
// logical NOT
// let marks = 90;
// if (!marks < 33) {
//   console.log("Pass");
// }
// ----------------------------------------------------------------------------------------------------------
//switch statement
// let color = "red";
// switch (color) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "yellow":
//     console.log("slow");
//     break;
//   case "green":
//     console.log("go");
//     break;
//   default:
//     console.log("broken light");
//     break;
// }
// ----------------------------------------------------------------------------------------------------------
// alert message
// alert("Somethig is wrong");
// console.error("This is an error message");
// ----------------------------------------------------------------------------------------------------------
//warning message
// console.warn("this is warning message");
// ----------------------------------------------------------------------------------------------------------
//prompt box
// prompt("please enter your name :");
// let a = prompt("Please enter you name :");
// console.log(a);
// ----------------------------------------------------------------------------------------------------------
// let fname = prompt("enter first name :");
// let lname = prompt("enter last name :");
// console.log(fname + lname);

// ==============================================================

// string methods
// format : stringName.method()
// ----------------------------------------------------------------------------------------------------------
// str.trim()
// let msg = " he   llo   ";
// console.log(msg.trim());        //remove extra spaces
// ----------------------------------------------------------------------------------------------------------
// str.toUpperCase()
// let msg = " hello";
// console.log(msg.toUpperCase());     //Upper Case
// ----------------------------------------------------------------------------------------------------------
// str.toUpperCase()
// let msg = " hello";
// console.log(msg.toLowerCase());     //Lower Case
// ----------------------------------------------------------------------------------------------------------
// string method with arguments
// let str = "jay";
// console.log(str.indexOf("j"));         //return index value
// ----------------------------------------------------------------------------------------------------------
// write two string method at one variable (Method Chaining)
// let msg = "hello";
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);
// ----------------------------------------------------------------------------------------------------------
// slice()
// let str = "ILoveCoding";
// newStr = str.slice(5);  // 5th inndex to ending
// newStr = str.slice(1, 4);    // start index to end index
// console.log(newStr);
// ----------------------------------------------------------------------------------------------------------
// replace()
// let str = "ILovecoding";
// console.log(str.replace("Love","jayu"));
// ----------------------------------------------------------------------------------------------------------
// repeat()
// let str = "Mango ";
// console.log(str.repeat(2));

// ==============================================================

// Array
// let students = ["jay", "vraj"];
// console.log(students); //show all arraya value
// console.log(students[0]); //show arrays index position
// ----------------------------------------------------------------------------------------------------------
// let nums = [2, 4, 6, 8];
// console.log(nums); //array number
// console.log(nums.length); //show length of array
// ----------------------------------------------------------------------------------------------------------
// let arr = ["jay", 220, 2.2, true];
// console.log(arr); //allow for multiple datatype values
// ----------------------------------------------------------------------------------------------------------
// let a = [];
// console.log(a); //empty array
// ----------------------------------------------------------------------------------------------------------
// let b = ["jay", "sitapara"];
// console.log(b[0][0]);   //show index is 0 or this index in 0th character was show
// ----------------------------------------------------------------------------------------------------------
// let c = ["jay"];
// console.log(c[0].length); //show length of index
// ----------------------------------------------------------------------------------------------------------
// let fruits = ["apple", "mango"];
// let newFruits = (fruits[0] = "banana"); //array are mutable it means array is an changable
// console.log(newFruits);
// ----------------------------------------------------------------------------------------------------------
// Array are mutable
// let x = ["apple", "banana", "litchi"];
// console.log(x);
// let newX = (x[11] = "mango");
// console.log(newX); //show between blank index was empty
// ----------------------------------------------------------------------------------------------------------
// arrays methods
// let car1 = ["BMW", "Maruti", "audi", "XUV", "Rolls Royce"];
// let car2 = ["Breeza", "Creta", "Ferari", "Jaguar"];
// let days = ["sunday", "tuesday", "monday", "saturday"];
// let num = [5, 8, 1, 2, 3, 9, 4, 6, 7];
// console.log(car1.push("toyota")); //push array, add new element in last index of array
// console.log(car1.pop()); //pop array, delete last index of array
// console.log(car1.unshift("toyota")); //unshift array, add new element in first index of array
// console.log(car1.shift()); //shift array, delete first index of array
// console.log(car1.indexOf("Maruti")); //return index of something
// console.log(car1.includes("BMW")); //search a value return true or false
// console.log(car1.concat(car2)); //merge two array
// console.log(car1.reverse()); //reverse an array
// console.log(car1.slice(0, 3)); //copies a portion of an array, 0 to 3 index
// console.log(car1.slice(0)); //show all index array
// console.log(car1.splice(2)); //show 2nd index to all elements
// console.log(car1.splice(0, 2)); //show 0 is deleted and 2nd to show
// console.log(car1.splice(0, 0, "toyota", "xuv")); //add new element in 0th index
// console.log(days.sort()); //sort in string
// console.log(num.sort()); //sort in number
// ----------------------------------------------------------------------------------------------------------
// Array References  //reference was not  store a value but store is address , create an new array it means create a new memory allocated
// let num = [1, 2, 3]; //num is a reference variable
// let a = [1] == [1];
// console.log(a); //false
// ----------------------------------------------------------------------------------------------------------
// constant array (perform operations in array but don't change array)
// const arr = [1, 2, 3, 4, 5]; //const arr can not be  change
// console.log(arr);
// ----------------------------------------------------------------------------------------------------------
// nested arrays
// let num = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(num); //show nested array
// console.log(num[1]); //print 1st position
// console.log(num[1][1]); //print 1st position in 1st value

// ==============================================================

// loops in JS
// console.log("*"); //same item print multiple time it time use loop
// console.log("*");
// console.log("*");
// console.log("*");
// console.log("*");
// ----------------------------------------------------------------------------------------------------------
// syntax
// for (initialisation; condition; updation) {
//   //do something
// }
// initialisation : counter variable
// condition : variable value condition
// updation : variable updation
// ----------------------------------------------------------------------------------------------------------
// for loop
// for (let i = 1; i <= 5; i++) {
//   //print 1 to 5
//   console.log(i);
// }
// ----------------------------------------------------------------------------------------------------------
// reverse
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }
// ----------------------------------------------------------------------------------------------------------
// print all odd numbers (1 to 15)
// for (let i = 1; i <= 15; i = i + 2) {
//   console.log(i);
// }
// ----------------------------------------------------------------------------------------------------------
// reverse
// for (let i = 15; i >= 1; i = i - 2) {
//   console.log(i);
// }
// ----------------------------------------------------------------------------------------------------------
//print all even numbers (1 to 15)
// for (let i = 2; i <= 10; i = i + 2) {
//   console.log(i);
// }
// ----------------------------------------------------------------------------------------------------------
// reverse
// for (let i = 10; i >= 2; i = i - 2) {
//   console.log(i);
// }
// ----------------------------------------------------------------------------------------------------------
//table using loop
// let n = prompt("enter number: ");
// n = parseInt(n);
// for (let i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }
// ----------------------------------------------------------------------------------------------------------
//nested loop
// for (let i = 1; i <= 3; i++) {
//     console.log(`outer loop ${i}`)
//   for (let j = 1; j <= 3; j++) {
//     console.log(j);
//   }
// }
// ----------------------------------------------------------------------------------------------------------
// while loop
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// ----------------------------------------------------------------------------------------------------------
//break keyword
// let i = 1;
// while (i <= 5) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }
// ----------------------------------------------------------------------------------------------------------
// loops with array
// let car = ["BMW", "Maruti", "audi", "XUV", "Rolls Royce"];
// for (let i = 0; i < car.length; i++) {
//   console.log(i, car[i]);
// }
// ----------------------------------------------------------------------------------------------------------
//reverse
// let car = ["BMW", "Maruti", "audi", "XUV", "Rolls Royce"];
// for (let i = car.length - 1; i >= 0; i--) {
//   console.log(i, car[i]);
// }
// ----------------------------------------------------------------------------------------------------------
//nested loops with nested arrays
// let car = [
//   ["BMW", "Maruti", "audi"],
//   ["XUV", "Rolls Royce"],
// ];
// for (let i = 0; i < car .length; i++) {
//   for (let j = 0; j < car[i].length; j++) {
//     console.log(`j=${j}, ${car[i] [j]}`);
//   }
// }
// ----------------------------------------------------------------------------------------------------------
//for of loop

// let car = ["BMW", "Maruti", "audi", "XUV", "Rolls Royce"];
// for (cars of car) {
//   console.log(cars);
// }
// ----------------------------------------------------------------------------------------------------------
//for of loop in calculate character
// for (char of "Jay Sitapara") {
//   console.log(char);
// }
// ----------------------------------------------------------------------------------------------------------
// nested forof loop
// let car = [
//   ["BMW", "Maruti", "audi"],
//   ["XUV", "Rolls Royce"],
// ];
// for (list of car) {
//   for (i of list) {
//     console.log(i);
//   }
// }

// ==============================================================

//JS object literals
// const student = {
//   name: "jay",
//   age: 20,
//   marks: 94,
//   city: "Rajkot",
// };

// console.log(student);
// ----------------------------------------------------------------------------------------------------------
//mini task
// const post = {
//   username: "@jaysitapara_",
//   content: "This is my #first post",
//   likes: 150,
//   repost: 5,
//   tags: ["@jay", "@vraj"],
// };

// console.log(post);
// ----------------------------------------------------------------------------------------------------------
//get data in object literals
// let students = {
//   name: "jayu",
//   marks: 94.4,
// };
// console.log(students["name"]);
// console.log(students.name);
// ----------------------------------------------------------------------------------------------------------
// JS object literal get values
// All keys convert into string
// Add any types of datatype key
// const obj = {
//   1: "a",
//   2: "b",
//   true: "c",
//   null: "d",
//   undefined: "e",
// };
// console.log(obj);
// ----------------------------------------------------------------------------------------------------------
// Add or Update value in JS object literals

// old record
// const student = {
//   name: "jay",
//   age: 20,
//   marks: 94.4,
//   city: "rajkot",
// };
// ----------------------------------------------------------------------------------------------------------
// update record
// let newRecord =
//   ((student.city = "mumbai"),
//   (student.gender = "female"),
//   (student.marks = "A"));
// console.log(student);
// ----------------------------------------------------------------------------------------------------------
// //delete record

// let deleteRecord = delete student.marks;
// console.log(student);

// ----------------------------------------------------------------------------------------------------------
// Object of Object
// const classInfo = {
//   jay: {
//     grade: "A",
//     city: "Rajkot",
//   },

//   vraj: {
//     grade: "B",
//     city: "Pune",
//   },

//   aman: {
//     grade: "C",
//     city: "Delhi",
//   },
// };

// console.log(classInfo);
// console.log(classInfo.jay);
// console.log(classInfo.jay.grade);
// ----------------------------------------------------------------------------------------------------------
//Array of Objects

// const classInfo = [
//   {
//     name: "Jay",
//     grade: "A",
//     city: "Rajkot",
//   },

//   {
//     name: "Vraj",
//     grade: "B",
//     city: "Pune",
//   },

//   {
//     name: "Aman",
//     grade: "C",
//     city: "Delhi",
//   },
// ];

// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[0].name);

// ==============================================================

//Math Object
//Properties
// console.log(Math.PI);
// console.log(Math.E);

//Methods
// let a = 10;

// console.log(Math.abs(a));
// console.log(Math.pow(a));
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.random(a));
// ----------------------------------------------------------------------------------------------------------
//Random Integer

//Step : 1
// let num = Math.random();

//Step : 2
// num = num * 10;

//Step : 3
// num = Math.floor(num);

//Step : 4
// num = num + 1;
// console.log(num);

// ==============================================================

//JavaScript Function

//Function definition
// function hello() {
//   console.log("jayu");
// }

//Calling Fun    ction
// hello();

//Another Example
// function isAdult() {
//     let age = 18;
//     if (age >= 18) {
//       console.log("Vote");
//     } else {
//       console.log("not vote");
//     }
//   }

//   isAdult();
// ----------------------------------------------------------------------------------------------------------
//extra function
// function aaa() {
//   let num = Math.random();
//   num = num * 6;
//   num = Math.floor(num);
//   console.log(num);
// }
// aaa();
// ----------------------------------------------------------------------------------------------------------
//function with argument

// function info(name, age) {
//   console.log(name, age);
// }

// info("jay", 20);

// function info(name, age) {
//   console.log(`${name}'s age is ${age}`);
// }

// info("jay", 20); // show name and age
// info("jay"); // show only name age wasn't declare so show "undefined"
// ----------------------------------------------------------------------------------------------------------
// sum of two number with function and arguments
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(10, 20);
// ----------------------------------------------------------------------------------------------------------
// Create a function that gives us the average of 3 numbers

// function calcAvg(a, b, c) {
//   let avg = (a + b + c) / 3;
//   console.log(avg);
// }

// calcAvg(2, 4, 6);
// ----------------------------------------------------------------------------------------------------------
// Create a function that prints the multiple table of numbers
// function printTable(n) {
//   for (let i = n; i <= n * 10; i += n) {
//     console.log(i);
//   }
// }

// printTable(2);
// ----------------------------------------------------------------------------------------------------------
//sum with return function
// function sum(a, b) {
// return a + b;
// }

// sum(10, 20); //value was called but not logged

// let s = sum(10, 20);
// console.log(s); //logged value
// ----------------------------------------------------------------------------------------------------------
// return function to check consition
// function isAdult(age) {
//   if (age >= 18) {
//     return "adult";
//   } else {
//     return "not adult";
//   }
// }
// isAdult(20);
// console.log(isAdult(20));
// ----------------------------------------------------------------------------------------------------------
// Get sum of number using function
// function sum(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(sum(2));
// ----------------------------------------------------------------------------------------------------------
// Return concatenation of all string in array
// let str = ["hii", "hello", "bye", "!"];

// function concat(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//   }
//   return result;
// }

// concat(str);
// console.log(concat(str));
// ----------------------------------------------------------------------------------------------------------
// function scope (variable is called into the function, outside are not allowed)
// same variable name are declare in bunction but outside
// function sum(a, b) {
//   let sum = a + b;
// }

// sum(1, 2); // called function
// console.log(sum); //error because sum var. is declare into the function
// ----------------------------------------------------------------------------------------------------------
// global scope (variable is called outside the function)
// let calsum = 54; //global scope

// function sum(a, b) {
//   let sum = a + b; //function scope
//   console.log(sum);
// }
// sum(1, 2); //called function
// console.log(calsum); //global scope function called
// ----------------------------------------------------------------------------------------------------------
//block scope (variable inside a {}, block can't be outside the function and block scope are not allowed with let and const keyword, allowed only var keyword but var is old and not good)
// {
//   let a = 10;
// }
// console.log(a); //error because logged outside the {} and with let keyword

// {
//   const b = 10;
// }
// console.log(b); //error because logged outside the {} and with const keyword

// {
//   var c = 10;
// }
// console.log(c); //don't show error var keyword is allowed outside block variable
// ----------------------------------------------------------------------------------------------------------
// Lexical scope (A variable define outside a function can be access inside another function define after the variable declaration, it means outside function variable can be access inside the another function declaration)
// function outerFunc() {
//   let x = 5;
//   let y = 6;
//   function innerFunc() {
//     console.log(x);
//     console.log(y);
//   }
//   innerFunc();
// }
// outerFunc();

// Before decalration and after create a variable are allowed
// function outerFunc() {
//   function innerFunc() {
//     console.log(x);
//     console.log(y);
//   }
//   let x = 5;
//   let y = 6;
//   innerFunc();
// }
// outerFunc();

// Rule of Lexical scope (Opposite is NOT TRUE) , (inner function variable are not access in outer function)
// function outerFunc() {
//   let x = 5;
//   let y = 6;
//   function innerFunc() {
//     let a = 5;
//     console.log(x);
//     console.log(y);
//   }
//   console.log(a);
//   innerFunc();
// }
// outerFunc();
// ----------------------------------------------------------------------------------------------------------
// Function Expression (create a function and store in a variable)
// const sum = function (a, b) {
//   return a + b;
// };
// s = sum(2, 3); //function called
// console.log(s); //function logged
// ----------------------------------------------------------------------------------------------------------
// Higher order function (one or multiple function as arguments)
// function multipleGreet(func, count) {
//   for (let i = 1; i <= count; i++) {
//     func();
//   }
// }
// let greet = function () {
//   console.log("hello world");
// };
// multipleGreet(greet, 2); // pass argument and number
// multipleGreet(greet(), 2); // error bcs. pass function time write only function name
// ----------------------------------------------------------------------------------------------------------
// Higher order function (return a function)
// function oddEvenTest(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//     return odd;
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//     return even;
//   } else {
//     console.log("wrong");
//   }
// }

// let request = "odd"; //even
// let func = oddEvenTest(request);
// console.log(func(10));
// ----------------------------------------------------------------------------------------------------------
// Methods in function (Actions that can be performed on an object /.... / functions are define in object/.../ show on key and value pair)
// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };
// console.log(calculator.add(5, 6));
// console.log(calculator.sub(5, 6));
// console.log(calculator.mul(5, 6));
// ----------------------------------------------------------------------------------------------------------
// Method shorthand property
// const calculator = {
//   add (a, b) {
//     return a + b;
//   },
//   sub (a, b) {
//     return a - b;
//   },
//   mul (a, b) {
//     return a * b;
//   },
// };
// console.log(calculator.add(5, 6));
// console.log(calculator.sub(5, 6));
// console.log(calculator.mul(5, 6));
// ----------------------------------------------------------------------------------------------------------
// This keyword (using with object)
// const student = {
//   name: "Jay",
//   age: 20,
//   eng: 90,
//   math: 98,
//   phy: 95,
//   getavg() {
//     // let avg = (eng + math + phy) / 3;   //error bcs object doesn't use directly
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(avg);
//     console.log(this)
//   },
// };
// student.getavg();
// ----------------------------------------------------------------------------------------------------------
// try & catch
// try {
//   console.log(a);
// } catch {
//   console.log("variable does not define");
// }
// ----------------------------------------------------------------------------------------------------------
// Arrow function (small syntax of function)
// const sum = (a, b) => {
//   console.log(a + b);
// };
// sum(1, 2); //call sum
// ----------------------------------------------------------------------------------------------------------
// Arrow function (Implicit return) (sort syntax of return value)
// const mul = (a, b) => (a * b);
// let ans = mul(2, 3);
// console.log(ans);
// ----------------------------------------------------------------------------------------------------------
// Set Timeout function (show function after set time)
// console.log("start");   // First log
// setTimeout(() => {
//   console.log("Hello World!");  //Second log
// }, 2000);
// console.log("End");    //Third log
// ----------------------------------------------------------------------------------------------------------
// setInterval Function
// setInterval(() => {
//   console.log("Hello World!");
// }, 2000);
// clearInterval(); //calling
// ----------------------------------------------------------------------------------------------------------
// How stop setInterval function
// let id = setInterval(() => {
//   console.log("Hello World!");
// }, 2000);
// console.log(id); //show id of setInterval function
// clearInterval(id); //stop setInterval function using id(id is a variable name or id)

// demo for show stop setInterval function (only show this funtion bcs 1st is stop after logged this function)
// let id2 = g(id2); //show id of setInterval function
// ----------------------------------------------------------------------------------------------------------
// This keyword with arrow function
// const student = {
//   name: "Jay",
//   marks: 95,
//   prop: this, //global scope, this keyword is window object
//   getName: function () {
//     //normal function
//     console.log(this);
//     return this.name;
//   },
//   getMarks: () => {
//     //Arrow function , parent scope, window object
//     console.log(this);
//     return this.marks;
//   },
// };

// ==============================================================

// Array methods (Extra methods to use in function)
// 1.forEach
// first method
// let arr = [1, 2, 3, 4, 5];
// let print = function (el) {
//   console.log(el);
// };
// arr.forEach(print);

// second method
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function (el) {
//   console.log(el);
// });

// third method (with arrow method)
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((el) => {
//   console.log(el);
// });

// Fourth method (with object)
// let arr = [
//   { name: "jay", marks: 98 },
//   { name: "vraj", marks: 90 },
//   { name: "aman", marks: 97 },
// ];
// arr.forEach((student) => {
//   console.log(student);
//   console.log(student.marks);
// });
// ----------------------------------------------------------------------------------------------------------
// 2.Map (old array to get value and create new array and new array size are same for old array)
// let num = [1, 2, 3, 4];
// let double = num.map(function (el) {
//   return el * 2;
// });
// let ans = double;
// console.log(ans);
// ----------------------------------------------------------------------------------------------------------
// 3.Filter (old array in add any function and this function are true so add element in new array and if callback was false so it was not add on new array)
// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// let even = nums.filter((num) => num % 2 == 0);  //even
// let odd = nums.filter((num) => num % 2 != 0);  //odd
// console.log(even);
// console.log(odd);
// ----------------------------------------------------------------------------------------------------------
// 4.Every (Return true if every element of array gives true for some function. Else return false)
// let arr = [2, 4, 6];
// let arr2 = [1, 3, 5, 7];
// let even = arr.every((el) => el % 2 == 0);
// let odd = arr2.every((el) => el % 2 != 0);
// console.log(even); //true bcs all are even number
// console.log(odd); //true bcs all are odd number
// ----------------------------------------------------------------------------------------------------------
// 5.Some (Return true if some element of array give true for some function. else return false.)
// let arr = [1, 2, 3, 4];
// let even = arr.some((el) => el % 2 == 0);
// console.log(even); //true bcs all are even number
// ----------------------------------------------------------------------------------------------------------
// 6.Reduce (Reduces the array to a single value)
// let arr = [1, 2, 3, 4];
// let ans = arr.reduce((res, el) => res + el);     //(accumulator , element are two arguments , any name's to define)
// console.log(ans);
// ----------------------------------------------------------------------------------------------------------
// Reduce Example (Finding Maximum in an array)
// let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];
// let result = nums.reduce((max, el) => {
//   if (el > max) {
//     return el;
//   } else {
//     return max;
//   }
// });
// console.log(result);

// ==============================================================

// Default Parameters (Giving a default value to the arguments, Add a default value in arguments)
// function sum(a, b = 3) {
//   return a + b;
// }
// let ans = sum(2);
// console.log(ans);
// ----------------------------------------------------------------------------------------------------------
// Spread (Expands an iterable into multiple values)
// function arr(a = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
//   console.log(...a);
// }
// arr();
// console.log(..."Jay Sitapara"); // with string
// ----------------------------------------------------------------------------------------------------------
// Spread (with array literals)
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];
// console.log(newArr);

//with string
// let char = [..."jayu"];
// console.log(char);

// with odd and even number
// let odd = [1, 3, 5, 7];
// let even = [2, 4, 6, 8];
// let ans = [...odd, ...even];
// console.log(ans);
// ----------------------------------------------------------------------------------------------------------
// Spread (with object literals)
// const data = {
//   email: "ironman@gmail.com",
//   password: "abcd",
// };
// let dataCopy = { ...data, id: 123 };
// console.log(dataCopy);
// ----------------------------------------------------------------------------------------------------------
// Rest (Allow a function to take an indefinite number of arguments and bundle them in an array)
// function sum(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log(`You gives us ${args[i]}`);
//   }
// }
// sum(1, 2);
// ----------------------------------------------------------------------------------------------------------
// Arguments (JS inbuilt keyword)
// function main(a, b, c, d) {// multiple arguments
//   // without define variable or collection
//   console.log(arguments); //"arguments" keyword is inbuilt array in JS (this is an array but you can not perform any operations)
// }
// main();
// ----------------------------------------------------------------------------------------------------------
// Destructuring (Storing value of array into multiple variable)
// let names = ["tony", "bruce", "steve", "peter", "john", "nick"]
// let [winner, runnerup, ...other] = names; //copies the value and store in new variable
// console.log(winner, runnerup, other); //other in store extra all name and these using (...) rest concept
// ----------------------------------------------------------------------------------------------------------
// Destructuring with objects
// const student = {
//   name: "jayu",
//   class: 10,
//   age: 21,
//   subject: ["hindi", "gujarati", "english"],
//   username: "jayu123",
//   password: 1234,
// };
// const { username: user, password: pass } = student;
// console.log(user, pass);

// ==============================================================

// DOM (Document Object Model)

// change innerText
// console.dir(document.all[8].innerText = "Peter Parker")

// selecting elements
// document.getElementById
// document.getElementById("mainImg")
// let imgObj = document.getElementById("mainImg");
// imgObj.src     // Access id's property
// imgObj.src = "./assets/creation_1.png"       // update image src
// ----------------------------------------------------------------------------------------------------------
// document.getElementByClassName
// let img = document.getElementsByClassName("oldImg")
// ----------------------------------------------------------------------------------------------------------
// handle using for loop
// let img = document.getElementsByClassName("oldImg")
// for (let i = 0; i < img.length; i++) {
//     console.dir(img[i]);
// }
// ----------------------------------------------------------------------------------------------------------
// change image
// let img = document.getElementsByClassName("oldImg")
// for (let i = 0; i < img.length; i++) {
//     img[i].src = "./assets/spiderman_img.png"
//     console.log(i);
// }
// ----------------------------------------------------------------------------------------------------------
// document.getElementByTagName
// document.getElementsByTagName("p")
// ----------------------------------------------------------------------------------------------------------
// Query Selector
// document.querySelector("p"); // select 1st p tag
// document.querySelector("#myId"); // select first element eith id = myId
// document.querySelector(".myClass"); // select first element eith class = myClass
// document.querySelectorAll("p"); // select all p elements
// document.querySelector("div a");    // select main tag into first sub tag
// ----------------------------------------------------------------------------------------------------------
// using properties & methods
// innerText
// let paragraph = document.querySelector("p")
// console.dir(paragraph)
// console.dir(paragraph.innerText)
// console.dir(paragraph.innerHTML)
// console.dir(paragraph.textContent)
// ----------------------------------------------------------------------------------------------------------
// manupulation
// update text
// let paragraph = document.querySelector("p")
// paragraph.innerText = "abc"

// add new html properties
// let paragraph = document.querySelector("p")
// paragraph.innerHTML = "<b>Jay Sitapara</b>"
// ----------------------------------------------------------------------------------------------------------
// Manipulating Attribute
// getAttribute
// let img = document.querySelector("img");
// img.getAttribute("id")
// console.dir(img)

// setAttribute
// let img = document.querySelector("img");
// img.setAttribute("id", "spiderManImg")
// console.dir(img)

// add new class in image
// let img = document.querySelector("img");
// img.setAttribute("class", "image")
// console.dir(img)
// ----------------------------------------------------------------------------------------------------------
// Manipulating Styling
// let heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// console.dir(heading)