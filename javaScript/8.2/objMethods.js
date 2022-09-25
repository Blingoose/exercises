const myCountry = {
  country: "Israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: 9,
  neighbours: ["Lebanon", "Jordan", "Syria", "Egypt"],

  describe() {
    const { country, capital, language, neighbours, population } = this;
    console.log(
      `${country} has ${population} million people, their mother tongue is ${language}, they have ${neighbours.length} neighbouring countries and a capital called ${capital}`
    );
  },
  checkIsIsland() {
    let isIsland =
      this.neighbours.length > 0
        ? (myCountry.isIsland = false)
        : (myCountry.isIsland = true);
    return isIsland;
  },
};

console.log(myCountry.checkIsIsland());
myCountry.describe();
console.log(myCountry);
