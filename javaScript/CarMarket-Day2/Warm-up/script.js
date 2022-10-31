/** 1)
  Create an input field and a button when the button is clicked 
  call  function that receives 'number' as a parameter (from input field) 
  and returns a new promise after 2 sec
  If the number is above 17 display on the screen 'You can drive' 
  and if it's smaller throw error and display on the screen 'You're too young to drive'
 */
//! Check yourself once with .then .catch and once with async await
//! DRY
//! Small functions
const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const message = document.querySelector(".message");

const getPromise = (num) => {
  if (!num) throw new Error("You must type your age");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num >= 17) resolve("You can drive");
      else reject("You can't drive");
    }, 2000);
  });
};

const setMessage = (text) => {
  return (message.textContent = text);
};

async function handleButtonClick() {
  try {
    const messageRes = await getPromise(input.value);
    setMessage(messageRes);
  } catch (err) {
    setMessage(err);
  }
}

const setEvents = () => {
  button.addEventListener("click", handleButtonClick);
};

setEvents();
