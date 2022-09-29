const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const cmprArrays = (arr1, arr2) => {
  let word = [];
  for (let i = 0; i < arr1.length; i++) {
    const str = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      if (str === arr2[j]) {
        word.push(str);
      }
    }
  }
  if (word.length === 0) {
    return false;
  }
  return word;
};

console.log(cmprArrays(food, food1));
