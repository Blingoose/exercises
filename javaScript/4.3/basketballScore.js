const avgCalc = function (arr) {
  let sumAll = 0;
  for (let i = 0; i < arr.length; i++) {
    sumAll += arr[i];
  }
  return sumAll / arr.length;
};

//* Re-usable functions
const logAllDraw = (avg) =>
  console.log(`It's a rare Draw! All teams scored ${avg} points on average`);

const logDraw = (avg, name) =>
  console.log(`It's a Draw between two! Both team scored ${avg} points on average.
The looser is ${name}`);

const logForWin = (avgW, name) =>
  console.log(`${name} Won! 
The average score is ${avgW} points`);

//! STARTS HERE ---> Rename Names to change it everywhere.
const teamBlue = [["Mike"], [100, 100, 100]];
const teamRed = [["John"], [100, 100, 100]];
const teamGreen = [["Mary"], [10, 10, 10]];

const avg1 = avgCalc(teamBlue[1]);
const avg2 = avgCalc(teamRed[1]);
const avg3 = avgCalc(teamGreen[1]);

if (avg1 === avg2 && avg2 === avg3) {
  logAllDraw(avg1);
} else if (avg1 > avg2 && avg1 > avg3) {
  logForWin(avg1, teamBlue[0]);
} else if (avg2 > avg1 && avg2 > avg3) {
  logForWin(avg2, teamRed[0]);
} else if (avg3 > avg2 && avg3 > avg1) {
  logForWin(avg3, teamGreen[0]);
} else if (avg1 === avg2 || avg1 === avg3 || avg2 === avg3) {
  if (avg2 > avg3) {
    logDraw(avg1, teamGreen[0]);
  } else if (avg3 > avg1) {
    logDraw(avg3, teamBlue[0]);
  } else logDraw(avg1, teamRed[0]);
} else console.log("Some score is a string?");
