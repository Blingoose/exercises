function countryInfo(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const varA = countryInfo("Israel", 8, "Jerusalem");
const varB = countryInfo("United States", 250, "Washington, D.C");
const varC = countryInfo("Netherlands", 17.2, "Amsterdam");

console.log(varA);
console.log(varB);
console.log(varC);
