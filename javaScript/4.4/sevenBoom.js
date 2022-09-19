const func = function (num) {
  for (let i = 1; i <= num; i++) {
    let n = i;
    if (i % 7 === 0 && i.toString().includes("7")) {
      n = "Boom-Boom";
    }
    if (n % 7 === 0) {
      n = "Boom";
    }
    console.log(n);
  }
};
func(100);
