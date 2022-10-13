const button = document.querySelector(".btn");
const input = document.querySelector(".age");
const messageDiv = document.querySelector(".message-holder");
const messageP = document.createElement("p");

function clearMessage() {
  messageP.remove();
}

input.addEventListener("input", function () {
  if (input.value.includes("0")) {
    messageP.remove();
  } else if (!Number(this.value) && input.value.length > 0) {
    messageP.innerText = "Numbers only!";
    messageDiv.append(messageP);
    setTimeout(clearMessage, 2000);
  }
  input.value = input.value.replace(/\D+/g, "");
});

// input.addEventListener("keyup", (e) => {
//   let x = event;
//   e.preventDefault();
//   if (KeyboardEvent === "Enter") {
//     console.log("Enter Is Pressed");
//     button.click();
//   }
// });

button.addEventListener("click", function () {
  if (+input.value >= 18) {
    messageP.innerText = "You can drink!";
    messageDiv.append(messageP);
  } else {
    messageP.innerText = "You're too young.";
    messageDiv.append(messageP);
  }
});
