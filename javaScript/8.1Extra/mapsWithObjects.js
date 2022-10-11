// 1. Create 3 separate objects that their key is called name and their value is a string. Store them in separate variables.
// 2. Create a new Map object that sets each object as a key and assign an id number as the value.
// 3. Iterate over the Map object with the for..of loop. - log the name and id

const log = (l) => console.log(l);

const obj1 = {
  name: "This",
};
const obj2 = {
  name: "Is",
};
const obj3 = {
  name: "Sparta",
};
const objToDelete = {
  name: "Delete me",
};

const map = new Map();
map.set(obj1, 1).set(obj2, 2).set(obj3, 3).set(objToDelete, 4);

log(map.size);
log(map.has(obj2));
log(map.get(obj3));
log(map.keys());
log(map.values());
log(map.entries());
map.delete(objToDelete);
log(map);

map.forEach((value, key) => console.log(`Name: ${key.name} --- ID: ${value}`));
//   for (let [k, v] of map) {
//   log(`Name: ${k.name} --- ID: ${v}`);
// }
