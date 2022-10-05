// function getSum(arr1, arr2) {
//   const sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     sum += arr2[i];
//   }
// }
// getSum([1, 2, 3][(5, 66, 23)]);

// # Note: We ask you not to solve the bug by finding it with your eyes but to use the debugging tools we've learned! What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
//* 1) Line 10: getSum([1, 2, 3][(5, 66, 23)]); and Line 2: const sum = 0;
// 2. Which debug method did you use to find the bug?
//* 2) I was using both console.log putting it in a few places and also using the native Run and Debug.
// 3. Explain the bug in your own words.
//* 3) The first for loop quit on me just after i=0--> this pointed me to verify both the loop and the getSum() invoke,
//*   and I have found that a comma (,) was missing between two of the arguments inside getSum(). But then,
//* right after executing the program again, an error poped up -> asignment to const variable 'sum'.
//* Also, the program is missing a return value.
// 4. Fix the code and submit it all.

function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
    // manual debug using log
    console.log(sum);
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
    //manual debug using log
    console.log(sum);
  }
}
getSum([1, 2, 3], [5, 66, 23]);
