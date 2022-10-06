// console.log(doSomething);
console.log(something);

// * Function Declaration / Statement
//! The function hoisted (including the content)
function doSomething() {
  console.log('Declare Something');
}

// * Function Expression
//? When defining the function, most of the time a function will be anonymous (without a name)
//? We can enter a function with a name as long as it is different from the variable name
//! The variable is hoisted and what is inside it is not
const something = function () {
  console.log('Express Something');
};
