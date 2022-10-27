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

function rememberUser(user) {
  userObj = {
    userLogin: user.login,
    img: user.avatar_url,
    name: user.name,
    link: user.html_url,
    repos: user.public_repos,
  };
  userArr.push(userObj.userLogin);
  input.value = "";
  createCard(userObj);
}

function createCard(info) {
  let userLogin = document.createElement("div");
  let card = document.createElement("a");
  let img = document.createElement("img");
  let userName = document.createElement("div");
  let repos = document.createElement("div");
  card.classList.add("card");
  img.classList.add("img");
  userName.classList.add("user-name");
  userLogin.classList.add("user-login");
  repos.classList.add("repos");

  img.src = `${info.img}`;
  if (info.name === null) {
    userName.textContent = "No Username";
  } else {
    userName.textContent = `Username: ${info.name}`;
  }
  repos.textContent = `Public Repos: ${info.repos}`;
  card.href = info.link;
  userLogin.textContent = info.userLogin;
  card.prepend(userLogin);
  card.appendChild(img);
  card.appendChild(userName);
  card.appendChild(repos);
  cardContainer.appendChild(card);
}
start();
