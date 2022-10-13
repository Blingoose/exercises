const btnP = document.querySelector(".btnPlus");
const btnM = document.querySelector(".btnMinus");
const text = document.querySelector("p");
const buttons = document.querySelector(".buttons");
let textSize = parseFloat(getComputedStyle(text).fontSize);

buttons.addEventListener("click", changeFontSize);

function changeFontSize(e) {
  if (e.target === btnP) {
    if (textSize < 100) {
      textSize += 4;
      text.style.fontSize = textSize + "px";
    }
  }
  if (e.target === btnM) {
    if (textSize > 6) {
      textSize -= 4;
      text.style.fontSize = textSize + "px";
    }
  }
}
