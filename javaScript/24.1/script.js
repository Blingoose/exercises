function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function (a, b, c, d) {
  if (a === b && b === c && c === d) {
    return true;
  } else return false;
};

const newSquare = new Square();
console.log(newSquare.isSquare(2, 2, 2, 2));

// Object.prototype.isSquare = function (a, b, c, d) {
//   if (a === b && b === c && c === d) {
//     return true;
//   } else return false;
// };

// console.log(Square.isSquare(2,2,2,2))
