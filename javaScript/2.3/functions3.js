// circleAreaMath = Math.PI * radius ** 2;

function circleArea(radius) {
  let calculation = Math.PI * radius ** 2;
  return calculation;
}

const areaOf35 = circleArea(35);
console.log(areaOf35);
const roundedTwoDecimal = areaOf35.toFixed(2);
console.log(roundedTwoDecimal);
//Or....
console.log(Math.round(areaOf35 * 100) / 100);
