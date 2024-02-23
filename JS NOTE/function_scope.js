// Function Scope
function functionScope() {
  var x = 10;
  console.log(x); // Output: 10
}
functionScope();
console.log(x); // Error: x is not defined

// Global Scope
var y = 20;
function globalScope() {
  console.log(y); // Output: 20
}
globalScope();
console.log(y); // Output: 20

// Block Scope
function blockScope() {
  if (true) {
    let z = 30;
    const w = 40;
    console.log(z); // Output: 30
    console.log(w); // Output: 40
  }
  console.log(z); // Error: z is not defined
  console.log(w); // Error: w is not defined
}
blockScope();

// Lexical Scope
function outerFunction() {
  var outerVar = 'I am outer';
  
  function innerFunction() {
    console.log(outerVar); // Output: I am outer
  }
  
  innerFunction();
}

outerFunction();
