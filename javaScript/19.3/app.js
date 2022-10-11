const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

//set maxlength=1 for each input
inputs.forEach((input) => (input.maxLength = 1));

function handleInput(e) {
  //check for data that was inputted and if there is a next input,
  // focus it.
  const input = e.target;
  if (input.nextElementSibling && input.value) {
    input.nextElementSibling.focus();
  }
}

function handlePaste(e) {
  const paste = e.clipboardData.getData("text");
  //   loop over each input, and populate with index of that string.
  inputs.forEach((input, i) => {
    input.value = paste[i] || "";
  });
}

inputs[0].addEventListener("paste", handlePaste);

form.addEventListener("input", handleInput);

123456;
