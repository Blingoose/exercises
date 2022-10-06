const obj = { brr: 12, brr2: 123, brr3: 1234 };
console.log(Object.entries(obj));

const swaped = {};
for (const [key, value] of Object.entries(obj)) {
  swaped[value] = key;
}
for (const key in obj) {
  console.log(obj[key]);
}
// console.log(swaped);
