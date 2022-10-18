const form = document.querySelector("#form-id");
const submit = document.querySelector("submit-btn");
const confirmBox = document.querySelector(".confirmBox");
const pName = document.querySelector(".pName");
const pAge = document.querySelector(".pAge");
const pEmail = document.querySelector(".pEmail");
const inputName = document.querySelector("#name");
const inputAge = document.querySelector("#age");
const inputEmail = document.querySelector("#email");
const confirmedForm = document.querySelector(".confirm");
const no = document.querySelector(".no");
const confirmedMsg = document.querySelector(".confirmed");
const popText = document.querySelector(".pop-msg");
let count = 0;

form.addEventListener("submit", openConfirmation);
function openConfirmation(e) {
  count++;
  if (
    inputName.value === "" ||
    inputAge.value === "" ||
    inputEmail.value === ""
  ) {
    e.preventDefault();
    popText.innerText = "All Values must be entered.";
    if (count === 1) {
      setTimeout(() => {
        count = 0;
        popText.innerText = "";
      }, 2000);
    }
  } else {
    e.preventDefault();
    pName.innerText = "Name:";
    pAge.innerText = "Age:";
    pEmail.innerText = "Email:";
    pName.innerText += " " + inputName.value;
    pAge.innerText += " " + inputAge.value;
    pEmail.innerText += " " + inputEmail.value;
    form.style.display = "none";
    confirmBox.style.display = "unset";
  }
}

no.addEventListener("click", edit);

function edit() {
  form.style.display = "flex";
  confirmBox.style.display = "none";
  inputName.value = inputName.value;
  inputAge.value = inputAge.value;
  inputEmail.value = inputEmail.value;
}

confirmedForm.addEventListener("click", confirmed);

function confirmed() {
  form.style.display = "none";
  confirmBox.style.display = "none";
  confirmedMsg.style.display = "unset";
}

inputAge.addEventListener("input", keepNumbersOnly);

function keepNumbersOnly() {
  inputAge.value = inputAge.value.replace(/\D+/g, "");
  inputAge.value = inputAge.value.replace(/^0/g, "");
}
