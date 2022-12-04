import chalk from "chalk";
import validator from "validator";

const checkIsEmail = (email) => {
  const isValidEmail = validator.isEmail(email);
  if (isValidEmail) {
    return chalk.bgGreen(isValidEmail);
  }
  return chalk.bgRed(isValidEmail);
};

const checkIsURL = (url) => {
  const isValidURL = validator.isURL(url);
  if (isValidURL) {
    return chalk.green(isValidURL);
  }
  return chalk.redBright.inverse.bold(isValidURL);
};

console.log(checkIsURL("icloud./com"));
console.log(checkIsEmail("andykatov@icloud.com"));
