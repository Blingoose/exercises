//!REDUCE FORMULA
// const sumWithInitial = array1.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
//   );

//? WHAT TO DO:
// 1. max
// 2. the sum of even numbers
// 3. average

const array = [10, 40, 5, 30, 15, 2];

//* 1. Max--------------------------------------------
// const maxNum = array.reduce((acc, cur) => {
//   if (acc < cur) {
//     return (acc = cur);
//   } else return acc;
// }, 0);
// console.log(maxNum);

const findMaxNumber = (arr) => {
  return arr.reduce((acc, cur) => {
    if (acc < cur) {
      return (acc = cur);
    }
    return acc;
  }, 0);
};

console.log(findMaxNumber(array));

//* 2. Sum of even-----------------------------------
const sumOfEven = (arr) => {
  return (result = arr.reduce((acc, cur) => (cur % 2 === 0 ? acc + cur : acc)));
};
console.log(sumOfEven(array));

//* 3. AVG-----------------------------------

const avg = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc + cur / arr.length;
  }, 0);
};
console.log(avg(array));
