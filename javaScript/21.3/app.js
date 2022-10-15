const textArea = document.querySelector(".area");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");
const counter = document.querySelector(".counter");
btn.value = textArea.value.length;
let count = 0;

textArea.addEventListener("input", () => {
  if (textArea.value.length > 99) {
    btn.value = "Submit";
  } else btn.value = textArea.value.length;
});

btn.addEventListener("click", () => {
  count++;
  if (textArea.value.length < 100 && count === 1) {
    msg.textContent = `Minimum character length is 100`;
    const abc = setTimeout(() => {
      msg.textContent = "";
      count = 0;
    }, 3000);
  } else if (textArea.value.length > 99) {
    textArea.value = "Thank you! Your application has been submitted.";
  }
});
