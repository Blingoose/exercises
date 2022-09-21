//! Variation 1
// const loopingArray = (popu) => {
//   const precentages = [];
//   for (let i = 0; i < popu.length; i++) {
//     precentages.push((popu[i] / 7753) * 100);
//   }
//   return precentages;
// };

// const populations = [8.5, 38.41, 65.39, 350];
// console.log(loopingArray(populations));

//! Variation 2
const loopingArray = (param) => {
  const precentages = [];
  param.forEach((element) => {
    precentages.push(((element / 7753) * 100).toFixed(2));
  });
  return precentages;
};

const populations = [8.5, 38.41, 65.39, 350];
console.log(loopingArray(populations));
