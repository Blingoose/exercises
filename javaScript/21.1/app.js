let count = 0;
const button = document.querySelector(".btn");
const input = document.querySelector(".age");
const messageDiv = document.querySelector(".message-holder");
const messageP = document.createElement("p");

//function to setTimeOut
function timeOut(func, t) {
  setTimeout(() => {
    func();
  }, t);
}

//clear poping messages
function clearMessage() {
  messageP.remove();
  count = 0;
}

//handle error message when repeated clicks happen
function clearRepeated() {
  if (count === 1) {
    timeOut(clearMessage, 3000);
    console.log("no");
  }
}

input.addEventListener("input", function () {
  if (
    !Number(this.value) &&
    input.value.length > 0 &&
    !input.value.includes("0")
  ) {
    count++;
    messageP.innerText = "Numbers only!";
    messageDiv.append(messageP);
    clearRepeated();
  }
  input.value = input.value.replace(/\D+/g, "");
});

button.addEventListener("click", function () {
  count++;
  if (+input.value >= 18) {
    messageP.innerText = "You can drink!";
    messageDiv.append(messageP);
    clearRepeated();
  } else if (input.value !== "") {
    messageP.innerText = "You're too young.";
    messageDiv.append(messageP);
    clearRepeated();
  }
});
