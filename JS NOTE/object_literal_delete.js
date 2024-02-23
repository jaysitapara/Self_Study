const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(person); // Output: { name: 'John', age: 30, city: 'New York' }

delete person.age;

console.log(person); // Output: { name: 'John', city: 'New York' }
