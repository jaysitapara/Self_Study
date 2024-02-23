// if statement
let num = 10;
if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative or zero");
}

// nested if-else statement
let age = 18;
let isStudent = true;
if (age >= 18) {
  if (isStudent) {
    console.log("You are an adult student");
  } else {
    console.log("You are an adult");
  }
} else {
  console.log("You are a minor");
}

// switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday");
    break;
  case "Tuesday":
    console.log("It's Tuesday");
    break;
  case "Wednesday":
    console.log("It's Wednesday");
    break;
  default:
    console.log("It's another day");
}
