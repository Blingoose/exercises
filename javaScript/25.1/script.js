const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
console.log(whoIsStronger(hero.getStrength.bind(hero)));

// 1. What is wrong with the code? explain in your own words
//! The function whoIsStronger is located in the window object but there's no window.getStrengh() function exist,
//! therefore we get an error.

// 2. Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".
//! To fix the problem we need to bind the "this" of the hero object to the getStrength() method of the object,
//!  that way, when we'll pass getStronger() to the whoIsStronger function it will know who is "this"
