const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const millisec = document.querySelector(".milli");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

let milliseconds = 0;
let interval = null;

function main() {
  milliseconds += 10;

  let min = Math.floor((milliseconds / (1000 * 60)) % 60);
  let sec = Math.floor((milliseconds / 1000) % 60);
  let mill = Math.floor((milliseconds % 1000) / 10);

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

start.addEventListener("click", startWatch);
stop.addEventListener("click", stopWatch);

function startWatch() {
  interval = setInterval(main, 10);
}

function stopWatch() {
  clearInterval(interval);
}
