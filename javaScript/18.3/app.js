// Somebody selected the elements and stored them into individual variables like this:

// const myFirstDiv = document.querySelector("#myFirstDiv");
// const mySecondDiv = document.querySelector("#mySecondDiv");
// const myThirdDiv = document.querySelector("#myThirdDiv");
// const myFourthDiv = document.querySelector("#myFourthDiv");
// Is there a better way you can store the individual elements with giving them different names?

const divs = document.querySelectorAll("div");
const fourDivs = [...divs];
const myFirstDiv = fourDivs[0];
const mySecondDiv = fourDivs[1];
const myThirdDiv = fourDivs[2];
const myFourthDiv = fourDivs[3];

//Not sure if it's considered better.
