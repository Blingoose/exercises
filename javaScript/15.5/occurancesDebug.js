// function countOccurrences(str, char) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === char) {
//       counter + 1;
//     }
//   }
//   return counter;
// }
// countOccurrences("ini mini miny moe", "n");

// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
//* 1) Line 5:  counter + 1;
// 2. Which debug method did you use to find the bug?
//* 2) Run and Debug + console.log.
// 3. Explain the bug in your own words.
//* 3) While debugging it showed that the counter is 0 at each iteration through the loop. That is because
//*   anything we add to the counter is discarded immediately as it isn't saved anywehre. It should have had the += sign or ++.
// 4. Fix the code and submit it all.
const log = console.log.bind(console);

function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
      //   console.log(counter);
    }
  }
  return counter;
}
const result = countOccurrences("ini mini miny moe", "n");
log(result);
