const obj = {
  name: " Andre",
  age: 32,
};

const swapFunc = (object) => {
  const swappedObj = {};
  //! Create an array of values
  const keysArr = Object.values(object);
  //! Assign to our new object --> values from the above array as keys, and the keys as values.
  for (let i = 0; i < keysArr.length; i++) {
    swappedObj[keysArr[i]] = Object.keys(object)[i];
  }
  return swappedObj;
};
console.log(swapFunc(obj));
