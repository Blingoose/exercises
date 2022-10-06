//? 1.1- Basic loop
// You are given this array:
const words = ['one', 'two', 'three', 'four', 'five'];
// Loop over this array with the forEach method and console log each
// element and its index.

words.forEach((element, index) => {
  //   console.log(element, index);
});

//! Bad practice !!!
//? 1.2- ToNumber
// Create a function ToNumber that takes one argument an array.
// Return from the function a new array changing the strings of numbers to
// actual numbers. Use the forEach method to accomplish this.

function toNumber(arr) {
  const newArr = [];
  arr.forEach((el, i) => {
    newArr.push(i + 1);
  });
  return newArr;
}
// console.log(toNumber(words));

//? 1.3-Fruits
// You are given this array of fruits:

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Loop over this array with the forEach method and console log this
// sentence : “I am eating a <fruit name>”. But if the fruit is an apple. You
// need to console log “I am eating an Apple.
// Notice we changed the “a” to “an”.

fruits.forEach((e) => {
  // if (e === 'apple') {
  //   return console.log(`I'm eating an ${e}`);
  // }
  // return console.log(`I'm eating a ${e}`);
  //   console.log(`I'm eating ${e === 'apple' ? 'an' : 'a'} ${e}`);
});

//? 1.4- Mutate the array
// You are given this array of numbers:
const numbers = [1, 2, 3, 4, 5];
// Iterate over this array with the forEach method. With the help of the third argument of the forEach method (which is the array you are looping over)
// mutate the array that every number double value.

// const mutate = (arr) => {
numbers.forEach((element, index, arr) => {
  let newElement = element * 2;
  arr[index] = element * 2;
  //   arr[index] *= 2;
});
console.log(numbers);
//   return arr;
// };
// mutate(numbers);
