const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const array2 = ["This", "is", 3, 4, "a", 6, ["Yo", 2], 8, "Good", "3", "Book"];
const string =
  "This is a very irritating assignment to do, but, I'll do it anyway.";

//! -------------Reusable-mapStuff-Function------------------
const mapStuff = (placeHolder, callback) => {
  placeHolder.map(callback);
};
// ----------------------------------------------------

//! ---------------doubleValues------------------------
const doubleArr = [];

const doubleValues = (e) => {
  return doubleArr.push(e * 2);
};

mapStuff(array, doubleValues);
console.log(doubleArr);
// ---------------------------------------

//! ------------------onlyEven---------------------
const evenArr = [];

const OnlyEvenValues = (e) => {
  if (e % 2 == 0) {
    return evenArr.push(e);
  }
};

mapStuff(array, OnlyEvenValues);
console.log(evenArr);
// ---------------------------------------

//! ----------------------FirstAndLast---------------------
const firstLastArr = [];

const showFirstAndLast = (e, i, arr) => {
  if ((i === 0 || i === arr.length - 1) && typeof e === "string") {
    firstLastArr.push(e);
  }
};
mapStuff(array2, showFirstAndLast);
console.log(firstLastArr);

//! -----------------------vowelCount------------------------------
const obj = {};

const vowelCount = (e) => {
  const vowel = "aeuoi";
  let toLower = e.toLowerCase();
  if (
    e !== " " &&
    e !== "'" &&
    e !== "," &&
    e !== "." &&
    vowel.indexOf(toLower) > -1
  ) {
    if (!obj[toLower]) {
      obj[toLower] = 1;
    } else obj[toLower]++;
  }
};

mapStuff(string.split(""), vowelCount);
console.log(obj);

//! -------------------------capitalized-------------------------
const capitalizedStr = [];

const capitalized = (e) => {
  let counter = 0;
  capitalizedStr.push(e[0].toUpperCase() + e.substr(1));
  capitalizedStr.join(" ");
};
mapStuff(string.split(" "), capitalized);
console.log(capitalizedStr.join(" "));
