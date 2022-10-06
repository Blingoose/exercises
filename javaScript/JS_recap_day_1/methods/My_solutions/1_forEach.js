//? 1.1- Basic loop
// You are given this array:
const words = ["one", "two", "three", "four", "five"];
const words2 = ["0", "1", "2", "3", "4"];
// Loop over this array with the forEach method and console log each
// element and its index.
const result = words.forEach((w, i) => {
  //   return console.log(w, i);
});

//? 1.2- ToNumber
// Create a function ToNumber that takes one argument an array.
// Return from the function a new array changing the strings of numbers to
// actual numbers. Use the forEach method to accomplish this.

const toNum = (arr) => {
  const newArr = [];
  arr.forEach((e) => {
    newArr.push(parseInt(e));
  });
  return newArr;
};
console.log(toNum(words2));

//? 1.3-Fruits
// You are given this array of fruits:

const fruits = ["mango", "papaya", "pineapple", "apple"];
fruits.forEach((e) => {
  if (e === "apple") {
    return console.log(`I'm eating an ${e}`);
  }
  console.log(`I'm eating a ${e}`);
});
// Loop over this array with the forEach method and console log this
// sentence : “I am eating a <fruit name>”. But if the fruit is an apple. You
// need to console log “I am eating an Apple.
// Notice we changed the “a” to “an”.

//? 1.4- Mutate the array
// You are given this array of numbers:
const numbers = [1, 2, 3, 4, 5];
// Iterate over this array with the forEach method. With the help of the third
// argument of the forEach method (which is the array you are looping over)
// mutate the array that every number double value.

numbers.forEach((_e, i, arr) => {
  arr[i] = arr[i] * 2;
});
console.log(numbers);
