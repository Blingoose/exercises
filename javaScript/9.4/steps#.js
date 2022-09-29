const stepShape = (num) => {
  // for (let i = 1; i <= num; i++) {
  //     console.log("*".repeat(i));
  // }

  let char = "";
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
      char += "*";
    }
    char += "\n";
  }
  console.log(char);
};

stepShape(4);
