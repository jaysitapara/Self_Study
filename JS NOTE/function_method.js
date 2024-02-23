class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  // Static method
  static getAdultAge() {
    return 18;
  }

  // Object method
  introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }

  // Built-in method
  toString() {
    return `Person: ${this.name}, ${this.age}`;
  }
}

// Usage
const john = new Person("John", 25);
john.sayHello(); // Output: Hello, my name is John
console.log(Person.getAdultAge()); // Output: 18
john.introduce(); // Output: My name is John and I am 25 years old
console.log(john.toString()); // Output: Person: John, 25
