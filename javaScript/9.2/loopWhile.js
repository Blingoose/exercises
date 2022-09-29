const populations = [8.5, 38.41, 65.39, 350];

const populationPrecentages = (population) => {
  const precentages = [];
  let i = 0;
  while (population.length > i) {
    precentages.push(precentageOfWorld(population[i]));
    i++;
  }
  return precentages;
};
function precentageOfWorld(populationVal) {
  const WorldPopulation = 7753;
  return ((populationVal / WorldPopulation) * 100).toFixed(2);
}

console.log(populationPrecentages(populations));
console.log(Array.isArray(populationPrecentages(populations)));
