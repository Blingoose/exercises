// https://api.github.com/users/{username}
const button = document.querySelector(".btn");
const input = document.querySelector(".search");
let cardContainer = document.querySelector(".card-container");
const userArr = [];
let userObj = {};

function start() {
  button.addEventListener("click", inputHandle);
  input.addEventListener("keyup", inputHandle);
}

async function getUser() {
  if (checkAlreadyDisplayed());
  else return;
  try {
    const user = await fetch(`https://api.github.com/users/${input.value}`);
    const userData = await user.json();
    console.log(userData);
    checkUserExist(userData);
  } catch (err) {
    console.log(err);
  }
}

function inputHandle(e) {
  if (e.key === "Enter") {
    getUser();
  } else if (e.button === 0) {
    getUser();
  }
}

function checkAlreadyDisplayed() {
  if (userArr.includes(input.value)) {
    console.log("already exist!");
    return false;
  }
  return true;
}

function checkUserExist(userData) {
  if (userData.login === input.value) {
    rememberUser(userData);
  } else console.log("Not Esixt");
}
// const card = document.querySelector(".card");
// const img = document.querySelector(".img");
// const userName = document.querySelector(".user-name");
// const repos = document.querySelector(".repos");

function rememberUser(user) {
  userArr.push(user.login);
  userObj = {
    img: user.avatar_url,
    name: user.name,
    link: user.html_url,
    repos: user.public_repos,
  };
  createCard(userObj);
}

function createCard() {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let userName = document.createElement("div");
  let repos = document.createElement("div");
  card.classList.add("card");
  img.classList.add("img");
  userName.classList.add("user-name");
  repos.classList.add("repos");

  img.src = `${userObj.img}`;
  userName.textContent = userObj.name;
  repos.textContent = userObj.repos;
  card.appendChild(img);
  card.appendChild(userName);
  card.appendChild(repos);
  cardContainer.appendChild(card);
  card.addEventListener("click", () => {
    window.open(`${userObj.link}`, "_blank");
  });
}
start();
