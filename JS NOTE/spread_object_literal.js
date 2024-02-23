const person = {
  name: 'John',
  age: 30,
};

const additionalInfo = {
  occupation: 'Developer',
  country: 'USA',
};

const newPerson = { ...person, ...additionalInfo };

console.log(newPerson);
