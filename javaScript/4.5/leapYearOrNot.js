const isLeapYear = (year) => {
  for (i = 2000; i <= year; i++) {
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
      console.log(`${i} is indeed a leap year`);
    } else console.log(`${i} is not a leap year`);
  }
};

//checking leap years from 2000 up until 2400.
isLeapYear(2400);
