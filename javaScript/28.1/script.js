const jokeTitle = document.querySelector(".jk-title");
const jokeOTD = document.querySelector(".jk-otd");
const button = document.querySelector(".btn");

button.addEventListener("click", fetchJoke);

const checkStatusAndParse = (response) => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
  return response.json();
};

const getJoke = (data) => {
  const jokeOfTheDay = data.contents.jokes[0];
  return Promise.resolve(jokeOfTheDay);
};

const printJokeAndTitle = (data) => {
  const joke = data.joke.text;
  const title = data.joke.title;
  jokeTitle.innerText = title;
  jokeOTD.innerText = joke;
};

function fetchJoke() {
  fetch("https://api.jokes.one/jod/")
    .then(checkStatusAndParse)
    .then(getJoke)
    .then(printJokeAndTitle)
    .catch((err) => {
      console.log(`${err}`);
    });
}
