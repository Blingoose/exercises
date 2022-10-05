const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a.1. Sort the array of strings from descending to ascending order.
// a.2. Sort the array of strings from ascending to descending order.

//! Answers:

//* a.1) ------------------------------------------> String in ascending
// long version
function sortAscending(a, b) {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
  return 0;
}
console.log(foods.sort(sortAscending));
// short version
console.log(foods.sort());

// ---------------------------------------------------------------

//* a.2) ----------------------------------------> String in descending
// long version
function sortDescending(a, b) {
  if (a > b) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
}
console.log(foods.sort(sortDescending));

// short version - FASTEST but doesn't care about A-Z
const shortDescending = foods.sort();
console.log(foods.reverse());

// third version
const sortFoods = foods.sort((a, b) => (a > b ? -1 : 1));
console.log(sortFoods);
// another one--> This sorts A-Z also.
const sortFoods2 = foods.sort((a, b) => b.localeCompare(a));
console.log(sortFoods);

//?converting to lower case option:
// const shortDescending = foods.map((a) => a.toLowerCase());
// console.log(shortDescending.sort());

// --------------------------------------------------------------------------------
// b. Let's sort an array of words that includes a word with an uppercase:

// b.1. Sort the array of strings from descending to ascending order.
// b.2. Sort the array of strings from ascending to descending order.
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

//* b1)-----------------------------------------> With upper in Ascending
// long version
const sortWithUpperAscend = foodsWithUpperCase.sort(function (a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a === b) return 0;
  if (a > b) return 1;
  return -1;
});

console.log(sortWithUpperAscend);

//short version
const shortWithUpperAscend = foodsWithUpperCase.sort((a, b) =>
  a.localeCompare(b)
);
console.log(shortWithUpperAscend);

//*b2)-----------------------------------------> With Upper in Desceding
// long version
const sortWithUpperDescend = foodsWithUpperCase.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a === b) return 0;
  if (b > a) return 1;
  return -1;
});
console.log(sortWithUpperDescend);

//short version
const shortWithUpperDescend = foodsWithUpperCase.sort((a, b) =>
  b.localeCompare(a)
);
console.log(shortWithUpperDescend);

// ----------------------------------------------------------------------------------

const words = [
  "apple",
  "supercalifragilisticexpialidociout",
  "supercalifragilisticexpialidocious",
  "hi",
  "zoo",
];
// c.1. Sort the array of strings from the longest word to the shortest word only using the sort function

//* c1)
// long version
const fromLongToShort = words.sort((a, b) => {
  if (b.length > a.length) return 1;
  if (b.length < a.length) return -1;
  return 0;
});

console.log(fromLongToShort);

// short version
const fromLongToShort2 = words.sort((a, b) => b.length - a.length);
console.log(fromLongToShort2);
