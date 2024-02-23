const student1 = {
  name: "John",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    history: 95
  }
};

const student2 = {
  name: "Jane",
  age: 22,
  grades: {
    math: 95,
    science: 92,
    history: 88
  }
};

const school = {
  students: {
    student1,
    student2
  },
  location: "New York"
};

console.log(school.students.student1.name); // Output: John
console.log(school.students.student2.grades.math); // Output: 95
console.log(school.location); // Output: New York
