const bulb = document.querySelector(".bulb");
const backGround = getComputedStyle(bulb);
bulb.addEventListener("click", toggleOnOff);

function toggleOnOff() {
  backGround.color === "rgb(47, 79, 79)"
    ? (bulb.style.color = "yellow")
    : (bulb.style.color = "rgb(47, 79, 79)");
}
console.log(backGround.color);
