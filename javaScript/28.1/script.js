const jokeTitle = document.querySelector(".jk-title");
const jokeOTD = document.querySelector(".jk-otd");
const button = document.querySelector(".btn");

button.addEventListener("click", fetchJoke);

function fetchJoke() {
  fetch("https://api.jokes.one/jod/")
    .then((response) => {
      if (!response.ok)
        throw new Error(`Status Code Error: ${response.status}`);

      response.json().then((data) => {
        const title = data.contents.jokes[0].joke.title;
        const joke = data.contents.jokes[0].joke.text;
        jokeTitle.innerText = title;
        jokeOTD.innerText = joke;
      });
    })
    .catch((err) => {
      console.log(`${err}`);
    });
}
