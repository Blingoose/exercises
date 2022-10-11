// Select all elements inside the body and store each element in a separate variable and print them to the console.
// 1. Select all elements not using the querySelector method.
const allBody = document.body;
console.log(allBody);

// 2. Select all elements using querySelector method.
const allBody2 = document.querySelector("body");
console.log(allBody2);

// 3. Select all inputs and iterate over them with the forEach
// method and print each one to the console. Using both querySelectorAll and getElementsByTagName.
// const all

const inputs = document.querySelectorAll("[type = 'text']");
[...inputs].forEach((a) => console.log(a));

const inputs2 = document.getElementsByTagName("input");
[...inputs2].forEach((e) => console.log(e));
