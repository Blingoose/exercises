const prompt = require("prompt-sync")({ sigint: true });
const numSibling = prompt("How many siblings do you have? ");

if (parseInt(numSibling) === 1) {
  console.log("1 sibling");
} else if (numSibling > 1) {
  console.log("More than 1 sibling");
} else console.log("No Siblings");

// We should use === and type conversion because numSibling without
// type conversions is represented as an string type.
// we convert it to num and thus === can compare int to int.
console.log(typeof numSibling);
console.log(typeof 1);
