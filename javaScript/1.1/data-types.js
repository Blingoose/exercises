// 1)
let myString = "string";
console.log(typeof myString);

// 2)
let myNum = 42;
console.log(typeof myNum);

// 3)
const user = {
  fullName: "Andre Katov",
  age: 32,
};
console.log(typeof user);

// 4)
let myBool = !true;
if (false === myBool) {
  console.log("Yep, it's truly false. --> " + typeof myBool);
}

// 5)
let myNothing = null;
console.log("it's actually a 'null' " + typeof myNothing);

// 6)
let myUndefined;
console.log(typeof myUndefined);

// 7)
let mySymbol1 = Symbol();
let mySymbol2 = Symbol();
console.log(mySymbol1 === mySymbol2, typeof mySymbol1);
