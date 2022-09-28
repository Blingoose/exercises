wordsArr = ["Hello", "Good Day", "You're Welcome", "hotdog", "hamburgers"];

const countLetters = (array) => {
  const objWillCountLetters = {};
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let letter = array[i][j].toLowerCase();
      if (letter !== " " && letter !== "," && letter !== "'") {
        if (!objWillCountLetters[letter]) {
          objWillCountLetters[letter] = 1;
        } else objWillCountLetters[letter]++;
      }
    }
  }
  return objWillCountLetters;
};

const objCountedLetters = countLetters(wordsArr);
//!  Creating a sorted array (ascending order) of keys (only keys) from the returned object above,
//! and then converting the keys to their values with the help of --> map.()
const sortedByCountLetters = Object.keys(objCountedLetters)
  .sort(function (a, b) {
    return objCountedLetters[a] - objCountedLetters[b];
  })
  .map((key) => objCountedLetters[key]);

//! Saving the last (highest) value from the array above into a variable
const highestCountLetter =
  sortedByCountLetters[sortedByCountLetters.length - 1];

//! finding an object key by its value from (I.E converting '7' to the letter 'o')
const keyByValue = Object.keys(objCountedLetters).find(
  (key) => objCountedLetters[key] === 7
);

//! Logging
console.log(sortedByCountLetters);
console.log(objCountedLetters);
console.log(
  ` The letter with most occurrences is --> '${keyByValue}', it occurred ${highestCountLetter} times.`
);
