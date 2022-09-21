function countryToLiveIn(lang, isIsland, population, country) {
  lang === "english" && isIsland === false && population < 50
    ? console.log(`You should live in ${country}.`)
    : console.log(`${country} does not meet your criteria.`);
}

countryToLiveIn("ENGLISH".toLowerCase(), false, 35, "England");
