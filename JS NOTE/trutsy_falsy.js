// Truthy values
const truthyValues = [
  'Hello', // non-empty string
  42, // number other than 0
  { name: 'John' }, // object
  [1, 2, 3], // array
  function() { return true; }, // function
  true // boolean value true
];

// Falsy values
const falsyValues = [
  '', // empty string
  0, // number 0
  NaN, // Not a Number
  null, // null
  undefined, // undefined
  false // boolean value false
];

// Example usage
function checkTruthyFalsy(value) {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
}

truthyValues.forEach(value => checkTruthyFalsy(value));
falsyValues.forEach(value => checkTruthyFalsy(value));
