// Please make the following changes to the HTML file while navigating the DOM.
// Create a variable that holds the <li> element with the class “start-here”.
//  Use traverse methods to complete these tasks:

const startHere = document.querySelector(".start-here");
//! 1. Change the text from “title 2” to “main title”
startHere.innerText = "main title";

//! 2. Add another subtitle with the text “subtitle 4”
const nextUl = startHere.nextElementSibling.firstElementChild;
const newLi = document.createElement("li");
newLi.innerText = "sub title 4";
nextUl.appendChild(newLi);

//! 3. Delete the last <li> element from the list.
// const doDelete = startHere.nextElementSibling.nextElementSibling;
const firstUL = startHere.parentElement;
// firstUL.lastElementChild.remove();
const lastLiOfUl = firstUL.lastElementChild;
firstUL.removeChild(lastLiOfUl);

//! 4. Change the <title> element text to “Master Of The Dom”.
const titleTag = ulParent.parentElement.previousElementSibling.lastElementChild;
titleTag.innerText = "The Master Of The Dom";

//! 5. Change the text of the <p> element to something else of yours
const pTag = ulParent.nextElementSibling.firstElementChild;
pTag.innerText =
  "This text previously contained 'Hello World', but not anymore.";
