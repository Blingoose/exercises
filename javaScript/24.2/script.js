function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (attackNum) {
  console.log(`${this.name} used ${this.attackList[attackNum]}`);
};

const psyduck = new Pokemon("Psyduck", "Psychic", [
  "Disable",
  "Tail Whip",
  "Scratch",
]);

const pikachu = new Pokemon("Pikachu", "Electric", [
  "Run",
  "Slap",
  "Thunderbolt",
]);
const charizard = new Pokemon("Charizard", "Fire", [
  "Hell Of Fire",
  "Fire Storm",
  "Smash",
]);

function invoke() {
  const pokemonArr = [...arguments];
  const randomNum = Math.floor(Math.random() * pokemonArr.length);
  pokemonArr.forEach((e) => {
    e.callPokemon(), e.attack(randomNum);
  });
}

invoke(pikachu, charizard, psyduck);
