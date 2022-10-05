// function calcAverage(arr) {
//   var sum;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// calcAverage([85, 90, 92]);

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
//* 1) Line 2: var sum;
// 2. Which debug method did you use to find the bug?
//* 2) Run and Debug
// 3. Explain the bug in your own words.
//* 3) sum is not initialized, it's at a state of undefined when addition happens. Therfore undefined + numbers = NaN
// 4. Fix the code and submit it all.

function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(arr[i]);
  }
  return sum;
}
console.log(calcAverage([85, 90, 92]));
