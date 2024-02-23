for (let i = 0; i < 5; i++) {
  console.log(i);
}
// for loop
for (let i = 0; i < 5; i++) {
  console.log("for loop iteration:", i);
}

// while loop
let j = 0;
while (j < 5) {
  console.log("while loop iteration:", j);
  j++;
}

// do...while loop
let k = 0;
do {
  console.log("do...while loop iteration:", k);
  k++;
} while (k < 5);

// for...in loop
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log("for...in loop:", key, person[key]);
}

// for...of loop
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log("for...of loop:", num);
}
