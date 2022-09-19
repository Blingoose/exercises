//* From function declarations to explicit and implicit
//* return functions (one of each).

// function welcome() {
// let welcome = 'Welcome to Appleseeds Bootcamp!';
// return welcome;
// }
//! Explicit function:
const expWelcome = () => {
  return "Welcome to Appleseeds Bootcamp!";
};
//! Implicit function:
const impWelcome = () => "Welcome to Appleseeds Bootcamp!";

// function power(a) {
// let myNumber = a;
// let result = Math.pow(myNumber, 2); return result;
// }
//! Explicit function:
const expPower = (a) => {
  return Math.pow(a, 2);
};
//! Implicit function:
const empPower = (a) => Math.pow(a, 2);

//* From function expressions to IIFE functions.

// const squareRoot = (a) => Math.sqrt(a);
const squareRoot = (function (a) {
  return Math.sqrt(a);
})(64);
console.log(squareRoot);

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
const randomNumbers = (function (a, b) {
  return Math.random() * (a - b) + b;
})(1, 10);
console.log(randomNumbers);
