// const isValidPass = (password) => {
//   if (password.length > 7) {
//     console.log("Strong");
//   } else if (password.length > 0 && password.length <= 7) {
//     console.log("Weak");
//   } else console.log("Empty password not allowed");
// };

// isValidPass("AAA33398798   ");

// const isValidPass = (password) => {
//   password.length > 7
//     ? console.log("Strong")
//     : password.length > 0 && password.length <= 7
//     ? console.log("Weak")
//     : console.log("Empty password not allowed");
// };

// isValidPass("");

const isValidPass = (password) => {
  password.length > 7 && password.match(/[A-Z]/)
    ? console.log("Very Strong")
    : password.length > 7
    ? console.log("Very Strong but might be better")
    : password.length === 7
    ? console.log("Strong")
    : password.length > 0 && password.length < 7
    ? console.log("Weak")
    : console.log("Empty not allowed");
};
isValidPass("1234567");
