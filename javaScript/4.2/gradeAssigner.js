const prompt = require("prompt-sync")({ sigint: true });
const numScore = parseInt(prompt("What's your score? "));

if (numScore >= 90 && numScore <= 100) {
  console.log("A");
}
if (numScore >= 80 && numScore < 90) {
  console.log("B");
}
if (numScore >= 70 && numScore < 80) {
  console.log("C");
}
if (numScore >= 65 && numScore < 70) {
  console.log("D");
}
if (numScore >= 0 && numScore <= 65) {
  console.log("F");
}
if (numScore.toString() === "NaN" || numScore < 0 || numScore > 100) {
  console.log("Wrong input. 0-100 only.");
}
