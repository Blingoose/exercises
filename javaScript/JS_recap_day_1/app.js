const string = 'Israel';
const myNumber = 6;
const obj = {};
const bool = true;
const nullValue = null;
let notDefined;
const mySymbol = Symbol('$');
// console.log(typeof string);
// console.log(typeof myNumber);
// console.log(typeof obj);
// console.log(typeof bool);
// console.log(typeof nullValue);
// console.log(typeof notDefined);
// console.log(typeof mySymbol);

// ! falsy value
// false
// 0
// -0
// 0n
// '', "", ``
// null
// undefined
// NaN
// document.all

//? '' === "" and `${js action}` → string
//? ===  check type as well
//? ==  without type checking
const num1 = 15.8545865415;
// console.log(num1.toFixed(8));

//? Math
// console.log(Math.PI);
// console.log(Math.min(30, 20));
// console.log(Math.max(30, 20));
// console.log(Math.random());
// console.log(Math.floor(num1));
// console.log(Math.pow(4, 3));

//? Date
const date = new Date();
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.toLocaleString());

//? Number
// console.log(Number('50'));
// console.log(parseInt('50 fsadfsd'));
// console.log('12' * 1);

//? if, else, else if
const x = 10;
if (x > 1) {
  if (x < 20) {
  }
} else {
}

//? ternary
//? condition ? true res : false res

//? && And, Or ||,  not !

//? &&

const arr = [
  {
    name: 'Erik',
    hobbies: ['programing', 'sport'],
  },
  {
    name: 'Bob',
  },
  {
    name: 'Dan',
    hobbies: ['programing'],
  },
];
// for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i].hobbies) {
//   console.log(arr[i].hobbies && arr[i].hobbies[0]);
//   //   }
// }
// console.log(('' || 20) && 30);

//? switch
// let color = 'brown';
// switch (color) {
//   case 'yellow':
//     console.log('yellow');
//     break;
//   case 'green':
//   case 'red':
//     console.log('green or red');
//     break;
//   default:
//     console.log('none of the above');
// }

const arr1 = ['one', 'two', 'three', 'four', 'five', 'six'];
// console.log(Array.isArray(arr1));

// for (let i = 0; i < arr1.length; i++) {
//   console.log(i);
// }

// for (let val of arr1) {
//   console.log(val);
// }

arr1.pop();

arr1.shift();

arr1.unshift('one');

arr1.push('six');

// console.log(arr1.indexOf('five'));

// console.log(
//   arr1.findIndex((element, index, arr) => {
//     console.log('index → ', index);
//     return element === 'two';
//   })
// );
const arr2 = [7, 8, 9];
const newArr = arr1.concat(arr2);
// console.log(newArr);

//? deconstructing
//? Arrays
const newArr2 = [arr1, ...arr2];
// console.log(newArr2);

//new instance of array - not mutate the original array
// const newSlice = arr2.slice(1, 2);

//Mutate the original array
arr2.splice(1, 1, 'Some', 'Some', 'Some');
// console.log(arr2);

//? Obj
const dan = {
  name: 'Dan',
  hobbies: [
    {
      // 158
      name: 'Erik',
      hobbies: ['programing', 'sport'],
    },
    {
      name: 'Bob',
    },
    {
      name: 'Dan',
      hobbies: ['programing'],
    },
  ],
};
const dani = { ...dan, name: 'Dani', age: 81 };

///↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// console.log(dani);

const obj3 = { name: 'Bob', age: 18, city: 'Haifa' };
for (let key in obj3) {
  //   console.log(key, ': ', obj3[key]);
}

const keysInObj3 = Object.keys(obj3);
const valuesInObj3 = Object.values(obj3);

const obj3AsArray = Object.entries(obj3);

// console.log(obj3AsArray);
for (let [key, val] of obj3AsArray) {
  //   console.log(val);
  // console.log(val[0], ': ', val[1]);
  console.log(key, ': ', val);
}

//? destructuring
const arr4 = ['one', 'two', 'three', 'four'];
let [second, first, third, fourth, ...rest] = arr4;
// let second = arr4[0];
// let first = arr4[1];
// let third = arr4[2];
// console.log(rest);
