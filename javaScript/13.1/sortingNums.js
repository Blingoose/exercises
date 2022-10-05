// 1. Sort the array of numbers from descending to ascending order.
// 2. Sort the array of numbers from ascending to descending order.
const numbers = [1, -5, 666, 2, 400, 11];

//* 1)
const sortAscending = numbers.sort((a, b) => a - b);
console.log(sortAscending);

//* 2)
const sortDescending = numbers.sort(function (a, b) {
  return b - a;
});

console.log(sortDescending);

// Version Two:
function compareNumsAscending(a, b) {
  return a - b;
}
function compareNumsDescending(a, b) {
  return b - a;
}

// Ascending:
console.log(numbers.sort(compareNumsAscending));
// Descending
console.log(numbers.sort(compareNumsDescending));
