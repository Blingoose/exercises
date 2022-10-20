const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const millisec = document.querySelector(".milli");
const startMe = document.querySelector(".start");
const stopMe = document.querySelector(".stop");
let hasButtonBeenClicked;
let milliseconds = 0;
let interval = null;
let mill = 0;
let sec = 0;
let min = 0;

function main() {
  milliseconds += 10;

  min = Math.floor((milliseconds / (1000 * 60)) % 60);
  sec = Math.floor((milliseconds / 1000) % 60);
  mill = Math.floor((milliseconds % 1000) / 10);

  minutes.innerText = min;
  seconds.innerText = sec;
  millisec.innerText = mill;

  if (min < 10) {
    minutes.innerText = "0" + min;
  }
  if (sec < 10) {
    seconds.innerText = "0" + sec;
  }
  if (mill < 10) {
    millisec.innerText = "0" + mill;
  }
}

startMe.addEventListener("click", startWatch);

stopMe.addEventListener("click", function eventHandler() {
  stopWatch();
  hasButtonBeenClicked = !hasButtonBeenClicked;
  if (!hasButtonBeenClicked) resetWatch();
});

function startWatch() {
  clearInterval(interval);
  interval = setInterval(main, 10);
  hasButtonBeenClicked = false;
}

function stopWatch() {
  clearInterval(interval);
}

function resetWatch() {
  milliseconds = 0;
  seconds.innerText = "00";
  millisec.innerText = "00";
  minutes.innerText = "00";
}
