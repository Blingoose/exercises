const testingArray = [2, 4, 5, 8, 13, 23, 54, 67, 78];

Array.prototype.myFilter = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    let currentElement = this[i];
    let callbackParams = callback(currentElement, i, this);
    if (callbackParams) {
      newArr.push(currentElement);
    }
  }
  return newArr;
};

const test = testingArray.myFilter(function (item, index, arr) {
  return item % 2 === 1;
});

console.log(test);
