// Question 1:
// In your own words what will this point to and why? (Note this is the global scope)
console.log(this);
//! "this" is referring to the window object because "this" is the window right now.

// Question 2:
// a. In your own words what will this point to and why?
//! "this is the window object bacause it's been called from the window object. Arrow function points to the "this" from the place it's
//! been called.

// b. How can you fix this code?
//! by changing the property greet from arrow function to "normal" function declaration.

// const myObj = {
//   name: "Timmy",
//   greet: () => {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();

const myObj = {
  name: "Timmy",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

// Question 3:
// In your own words what will this point to and why?
//! "this" will refer to the window because the function is inside the window object/called from the window object.
//! and right now it has its own "this" which is the window "this".
//! function declaration will refer to the window if it's ain't called as an object method.
const myFuncDec = function () {
  console.log(this);
};
myFuncDec();

// Question 4:
// In your own words what will this point to and why?
//! "this will refer to the window because the arrow function refers to its parent's this that ivoked it, which
//! in this case is the window object. Arrow function doesn't have its own "this".
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

// Question 5:
// a. In your own words, what will this point to and why?
//! "this" will point out to the window instead the element because of Arrow function nature- which is pointing to the "this" of the object
//! parent - right now it is the document (window object).
//  b. How can you fix this code?
//! to fix it, we can change from an Arrow function to normal function declaration, which will hold the this of the element that the action
//! was called up on - in out case it's the selected element.
document.querySelector(".element").addEventListener("click", (e) => {
  console.log(this);
});
