let player1 = document.querySelector("#player1-race>.active");
let player2 = document.querySelector("#player2-race>.active");
const table = document.querySelector(".racer-table");
const raceLength = table.rows[0].cells.length - 1;
document.addEventListener("keypress", moveThem);
let count1 = 0;
let count2 = 0;

function moveThem(e) {
  if (e.key === "q" && count1 < raceLength) {
    count1++;
    player1.nextElementSibling.classList.add("active");
    player1.classList.remove("active");
    player1 = document.querySelector("#player1-race>.active");
  }
  if (e.key === "p" && count2 < raceLength) {
    count2++;
    player2.nextElementSibling.classList.add("active");
    player2.classList.remove("active");
    player2 = document.querySelector("#player2-race>.active");
    console.log(count2);
  }
  if (count2 === raceLength && count1 < raceLength) {
    console.log("Player2 Wins");
    document.removeEventListener("keypress", moveThem);
  } else if (count1 === raceLength && count2 < raceLength) {
    console.log("Player1 Wins");
    document.removeEventListener("keypress", moveThem);
  }
}
