// function findSmallest(a, b, c) {
//   if (a > b > c) {
//     return c;
//   } else if (a > c > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// findSmalest(52, 66, 2);

// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
//* 1)  Line: 10, line 2 and line 4 (both 2 and 4 used operators '>' incorrectly.)
// 2. Which debug method did you use to find the bug?
//* 2)  console logging + Run and Debug.
// 3. Explain the bug in your own words.
//* 3) First bug/error poped up was --> findSmalest is not defined. It's supposed to be findSmallest.
//* The second error is the incorrect result and the wrong use of operators -> a>b>c doesn't work like a>b && a>c.
// 4. Fix the code and submit it all.

function findSmallest(a, b, c) {
  if ((a > b && b > c) || (b > a && a > c)) {
    console.log(c);
    return c;
  } else if ((c > b && b > a) || (b > c && c > a)) {
    console.log(a);
    return a;
  } else {
    console.log(b);
    return b;
  }
}
findSmallest(52, 66, 2);
