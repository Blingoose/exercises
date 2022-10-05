// function getSumOfEven(arr) {
//   return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
// }
// getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//     What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
//* 1) Line 2:  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
//  2. Which debug method did you use to find the bug?
//* 2) console.log only was enough.
// 3. Explain the bug in your own words.
//* 3) return value NaN (arr[10] is undefined). Also, the math sums all odd numbers, not all even.
// 4. Fix the code and submit it all.
// we want to sum all numbers in even cells in arrays of size 10: [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30

function getSumOfEven(arr) {
  //   console.log(arr[9]);
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
const result = getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
