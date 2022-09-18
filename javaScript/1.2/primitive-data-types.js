// --Delete the wrong answers--
// 1. Which of the following is/are strings?
// c) '4'
// 2. Which of the following is/are numbers?
// a) 4
// b) 4.0
// c) '4'
// d) -4

// 3. Which of the following is/are booleans?
// a) true
// b) false

// 4. What is the result of 80 + 71.2?
// a) 151.2

// 5. What is the result of "80" + 71.2?
// c) "8071.2"

// 6. Does 100 + 30 produce a number or a string?
// a) number

// 7. Does "100" + 30 produce a number or a string?
// b)string
//

//------Submit your answers under the
//question------
//create three different ways to declare variables
let myLar = null;
const myConst = 42;
var notNeeded = false;

//declare a variable and reassign a value to it
let hisAge;
hisAge = "20";

//create a variable and after that assign a string
//with its value being: He's got it!
let thisName = null;
thisName = "He's got it!";

// 1. create a variable and assign a value on how
// much a restaurant bill is.
let resBill = 20;

// 2. create a variable and assign a value on how
// much tax they should pay.
const thievesTax = 17.5;

// 3. create a variable that will calculate the bill
// tax and its output would be: Your total bill is
// <total bill> $.

let totatBill = resBill + (resBill * thievesTax) / 100;
console.log(`Your total bill is ${totatBill}`);

// Round the number 50.6 to its nearest integer
console.log(Math.round(50.6));

//Create a variable that is undefined
let okNoProblem;
console.log(okNoProblem);

// function isPangram(sentence) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   for (let m = 0; m < alphabet.length; m++) {
//     if (sentence.toLowerCase().indexOf(alphabet[m]) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPangram("The quick brown fox jumps over he lazy dog"));
