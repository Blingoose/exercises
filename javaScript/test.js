// const arrayLike = {
//   length: 3,
//   unrelated: "foo",
//   0: 4,
//   2: 2,
// };
// console.log(Array.prototype.splice.call(arrayLike, 0, 0, 3, 9));
// // [ 5 ]
// console.log(arrayLike);

const array1 = ["a", "b", "c"];

console.log(array1.entries());

// If you need to find:

//     - the first element that matches, use find().
//     - the index of the last matching element in the array, use findLastIndex().
//     - the index of a value, use indexOf(). (It's similar to findIndex(),
//       but checks each element for equality with the value instead of using a testing function.)
//     - the last index at which a given element can be found use lastIndexOf().
//     - whether a value exists in an array, use includes().
//       Again, it checks each element for equality with the value instead of using a testing function.
//     - the last element that satisfies the testing function, use findLast()
//     - if ANY element satisfies the provided testing function, use some().
//     - if ALL satisfies the provided testing function, use every().
