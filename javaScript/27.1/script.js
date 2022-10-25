const rand = Math.floor(Math.random() * 20 + 1);
function greaterThanTen(num) {
  return new Promise(function (resolve, reject) {
    if (num >= 10) {
      resolve();
    } else reject();
  });
}

greaterThanTen(rand)
  .then(() => console.log("Greater than!"))
  .catch(() => console.log("Less than :("));
