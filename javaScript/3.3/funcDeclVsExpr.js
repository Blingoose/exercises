console.log("------------------Func Declaration------------------------------");
//! Func Declaration
function precentageOfWorld1(populationVal) {
  const WorldPopulation = 7753;
  return ((populationVal / WorldPopulation) * 100).toFixed(2);
}
function countryAndPopulation(country, population) {
  const result = `The world population precentage of ${country} is
   ${precentageOfWorld1(population)}%\n`;
  return result;
}

const forIsrael = countryAndPopulation("Israel", 8.5);
const forCanada = countryAndPopulation("Canada", 38.41);
const forFrance = countryAndPopulation("France", 65.39);

console.log(forIsrael);
console.log(forCanada);
console.log(forFrance);

console.log("------------------Func Expression------------------------------");
//! Func Expression
const precentageOfWorld2 = function (populationVal) {
  const WorldPopulation = 7753;
  return ((populationVal / WorldPopulation) * 100).toFixed(2);
};

function countryAndPopulation(country, population) {
  const result = `The world population precentage of ${country} is
   ${precentageOfWorld1(population)}%\n`;
  return result;
}

const forIsrael2 = countryAndPopulation("Israel", 8.5);
const forCanada2 = countryAndPopulation("Canada", 38.41);
const forFrance2 = countryAndPopulation("France", 65.39);

console.log(forIsrael2);
console.log(forCanada2);
console.log(forFrance2);
