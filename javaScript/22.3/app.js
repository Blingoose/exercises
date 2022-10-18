const guessLetter = document.querySelector(".guess-letter");
const guessedMsg = document.querySelector(".guessed-msg");
const keysGuessed = document.querySelector(".keys");
const playAgain = document.querySelector(".play-again");
const playBtn = document.querySelector(".play");
let guessedArr = [];
let hiddenLetter;

function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  let hiddenL = randomCharacter;
  return hiddenL;
}

function gameStart() {
  document.addEventListener("keypress", startGuess);
  guessLetter.innerText = "?";
  hiddenLetter = randomLetter();
}

function gameEnd() {
  document.removeEventListener("keypress", startGuess);
}

function startGuess(evt) {
  let toLowerCase = evt.key.toLowerCase();
  if (!onlyLetters(toLowerCase)) {
    guessedMsg.innerText = "Only letters A-Z!";
    return;
  } else if (toLowerCase === hiddenLetter) {
    guessLetter.innerText = hiddenLetter;
    guessedMsg.innerText = "You have guessed it right!";
    guessedMsg.style.color = "green";
    guessedMsg.style.fontWeight = "500";
    gameEnd();
    playAgain.style.display = "initial";
  } else if (!guessedArr.includes(toLowerCase)) {
    guessedArr.push(toLowerCase);
    console.log(guessedArr);
    guessedMsg.innerText = `Nope! it is not --> ${toLowerCase}`;
    guessedMsg.style.color = "red";
    guessedMsg.style.fontWeight = "500";
    keysGuessed.innerText = `[ ${guessedArr} ]`;
    keysGuessed.style.fontStyle = "italic";
    keysGuessed.style.fontWeight = "300";
  } else {
    guessedMsg.innerText = `You have already guessed the letter [ ${toLowerCase} ]`;
  }
}

function restart() {
  gameStart();
  playAgain.style.display = "none";
  keysGuessed.innerText = "[ wrong guesses appear here ]";
  guessedMsg.innerText =
    "Press a-z keys on your keyboard and try to guess the letter.";
  guessedMsg.style.color = "black";
  guessedMsg.style.fontWeight = "400";
  guessedArr = [];
}

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

gameStart();
playBtn.addEventListener("click", restart);
