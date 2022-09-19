//* From reformat the following function
//* declarations to function expression.
// function welcome() {
//   let welcome = "Welcome to Appleseeds Bootcamp!";
//   return welcome;
// }
const welcome = function () {
  return "Welcome to Appleseeds Bootcamp!";
};

// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// }
const power = function (a) {
  return Math.pow(a, 2);
};

// function add(a, b = 5) {
//   let myNumber = a;
//   let sum = myNumber + b;
//   return sum;
// }
const add = function (a) {
  return a + 5;
};

//* From function expressions to function declarations
// const hello = () => "Hello!";
function hello() {
  return "Hello";
}

// const squareRoot = (a) => Math.sqrt(a);
function squareRoot(a) {
  return Math.sqrt(a);
}

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function randomNumbers(a, b) {
  return Math.floor(Math.random() * (a - b) + b);
}
