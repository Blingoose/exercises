const obj = {
  name: "Robert",
  printName() {
    console.log(this.name);
  },
  printName2() {
    setTimeout(
      function () {
        this.printName();
      }.bind(this),
      2000
    );
  },
};

obj.printName();
obj.printName2();

// const obj = {
//   name: "Robert",
//   printName() {
//     console.log(this.name);
//   },
//   printName2() {
//     setTimeout(this.printName.bind(this), 3000);
//   },
// };

// obj.printName();
// obj.printName2();
