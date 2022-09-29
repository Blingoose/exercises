const isString = (str, func) => {
  if (typeof str === "string") {
    func(str);
  }
  return console.log(typeof str);
};

//This is the callback function. It is passed to isString() as an argument.
function log(string) {
  console.log(string);
}

isString("123", log);
