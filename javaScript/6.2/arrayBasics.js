const people = ["Greg", "Mary", "Devon", "James"];
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// people.shift();
// people.pop();
// people.unshift("Matt");
// people.push("Andre");

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
//   if (people[i] === "Mary") {
//     break;
//   }
// }

// const people2 = people.slice(2, 4);
// for (let i = 0; i < people2.length; i++) {
//   console.log(people2[i]);
// }

// console.log(people.indexOf("Mary"));
// console.log(people.indexOf("Foo"));

people.splice(2, 1, "Elizabeth", "Artie");

for (let i = 0; i < people.length; i++) {
  console.log(`People: ${people[i]}`);
}

const withBob = people.concat("Bob");

for (let i = 0; i < withBob.length; i++) {
  console.log(`With Bob: ${withBob[i]}`);
}
