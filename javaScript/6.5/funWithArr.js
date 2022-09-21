// const filledArr
const filledArr = new Array(100).fill({ name: "Mordi" });

// console.log(filledArr);
let count = 0;

const filledNumArr = Array.from(Array(100).keys()).map((x) => ++x);
console.log(filledNumArr);

const arrFromValues = filledArr.map((item) => item.name);
console.log(arrFromValues);

