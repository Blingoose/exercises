const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const array2 = ["This", "is", 3, 4, "a", 6, ["Yo", 2], 8, "Good", "3", "Book"];
const string =
  "This is a very irritating assignment to do, but, I'll do it anywayz.";

//! -------------Reusable-doStuff-Function------------------
const doStuff = (placeHolder, callback) => {
  placeHolder.forEach(callback);
};
// ------------------------------------------------------------

//! ---------------doubleValues------------------------
const doubleArr = [];

const doubleValues = (e) => {
  return doubleArr.push(e * 2);
};

doStuff(array, doubleValues);
console.log(doubleArr);
// ---------------------------------------

//! ------------------onlyEven---------------------
const evenArr = [];

const OnlyEvenValues = (e) => {
  if (e % 2 == 0) {
    return evenArr.push(e);
  }
};

doStuff(array, OnlyEvenValues);
console.log(evenArr);
// ---------------------------------------

//! ----------------------FirstAndLast---------------------
const firstLastArr = [];

const showFirstAndLast = (e, i, arr) => {
  if ((i === 0 || i === arr.length - 1) && typeof e === "string") {
    firstLastArr.push(e);
  }
};
doStuff(array2, showFirstAndLast);
console.log(firstLastArr);

//! -----------------------vowelCount------------------------------
const obj = {};

const vowelCount = (e) => {
  const vowel = "aeuoi";
  const toLower = e.toLowerCase();
  if (vowel.indexOf(toLower) > -1) {
    if (!obj[toLower]) {
      obj[toLower] = 1;
    } else obj[toLower]++;
  }
};

doStuff(string.split(""), vowelCount);
console.log(obj);

//! -------------------------capitalized-------------------------
const capitalizedStr = [];

const capitalized = (e) => {
  capitalizedStr.push(e[0].toUpperCase() + e.substr(1));
};
doStuff(string.split(" "), capitalized);
console.log(capitalizedStr.join(" "));

//! ----------------------------shiftLetters------------------------------
const shiftedStr = [];

const shiftLetters = (word) => {
  shiftedStr.push(
    word
      .split("")
      .map((char) => {
        if (char === "a") {
          return String.fromCharCode(char.charCodeAt() + 25);
        }
        return String.fromCharCode(char.charCodeAt() - 1);
      })
      .join("")
  );
};

doStuff(string.split(" "), shiftLetters);
console.log(shiftedStr.join(" "));

//**************************************** */ Internet Solution
// strr = "abcd efgh";
// const shiftLetters = (string) => {
//   return string
//     .split(" ")
//     .map((word) => {
//       return word
//         .split("")
//         .map((letter) => {
//           return String.fromCharCode(letter.charCodeAt() + 1);
//         })
//         .join("");
//     })
//     .join(" ");
// };

// console.log(shiftLetters(string));

// --------------------------------------------------------------

//! ------------------------------swapCase---------------------------
const swapArr = [];
const swapCase = (e, i) => {
  if (i % 2 === 0) {
    return swapArr.push(e[0].toUpperCase() + e.substr(1));
  }
  return swapArr.push(e[0].toLowerCase() + e.substr(1));
};
doStuff(string.split(" "), swapCase);
console.log(swapArr.join(" "));
