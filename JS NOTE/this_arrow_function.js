// Example 1: Arrow function with this
const obj = {
  name: "John",
  sayHello: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`); // 'this' refers to the surrounding lexical context (obj)
    }, 1000);
  },
};

obj.sayHello(); // Output: Hello, John!

// Example 2: Arrow function as a method
const calculator = {
  value: 0,
  add: (num) => {
    calculator.value += num; // 'this' is not bound to the calculator object
  },
  getValue: () => {
    console.log(calculator.value); // 'this' is not bound to the calculator object
  },
};

calculator.add(5);
calculator.getValue(); // Output: 0 (value is not updated)
