function dateFunc() {
  const longDay = { weekday: "long" };
  const numericDay = { day: "numeric" };
  const longMonth = { month: "long" };
  const numericYear = { year: "numeric" };

  const currentDate = new Date();

  weekDay = currentDate.toLocaleDateString("en-us", longDay);
  day = currentDate.toLocaleDateString("en-us", numericDay);
  month = currentDate.toLocaleDateString("en-us", longMonth);
  year = currentDate.toLocaleDateString("en-us", numericYear);

  return `Today is ${weekDay} the ${day} of ${month} ${year}`;
}

console.log(dateFunc());
