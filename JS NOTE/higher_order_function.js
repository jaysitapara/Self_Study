// Higher-order function that takes a function as an argument
function higherOrderFunction(callback) {
  // Perform some operations
  console.log("Executing higher-order function");
  
  // Call the callback function
  callback();
}

// Callback function passed to the higher-order function
function callbackFunction() {
  console.log("Executing callback function");
}

// Call the higher-order function and pass the callback function
higherOrderFunction(callbackFunction);
