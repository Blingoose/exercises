//! variation 1
// const lengthOfString = (string) => {
//   const newArr = [];
//   string.forEach((element) => {
//     newArr.push(element.length);
//   });
//   return newArr;
// };

// const arrWords = ["bo", "dooooo", "hoo", "ro"];
// console.log(lengthOfString(arrWords));

//! variation 2
const lengthOfString = (string) => {
  const newArr = string.map((iterator) => iterator.length);
  return newArr;
};

const arrWords = ["booeeeeeeee", "dooooo", "hoo", "ro"];
console.log(lengthOfString(arrWords));
