const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

//* 1)-----------------------------------
const returnNames = (arr, i) => {
  let names = arr.map((element) => {
    return { Name: element.name };
  });
  return names;
};
console.log(returnNames(data));

const getNames = (data) => data.map(({ name }) => name);
console.log(getNames(data));
// ------------------------------------------------------------------

//* 2)--------------------------------------------
//! ----------------failed attempt------------

// const before1990 = (e) => {
//   const birthDates = e.map((dates) => {
//     return dates.birthday;
//   });
//   const convertDate = birthDates.map((d) => {
//     return new Date(d).getFullYear();
//   });

//   const returnBefore1990 = convertDate.map((year) => {
//     if (year < 1990) {
//       obj.push({ data });
//       return year;
//     }
//   });
// };
// console.log(before1990(data));

//*successful - but - didn't do it myself
const bornBeforeNineties = (arr) => {
  const bornBefore1990 = [];
  arr.map((d) => {
    if (d.birthday.split("-")[2] < 1990) {
      bornBefore1990.push(d);
    }
  });
  return bornBefore1990;
};

console.log(bornBeforeNineties(data));
// ------------------------------------------------------------------

//* 3)-------------------------------------------------------
//*   a) using for loop
// console.log(data[0].favoriteFoods.meats);

// const countFood = {};
// const foodsCount = (foods) => {
//   foods.forEach((element) => {
//     let allFoods = [
//       ...element.favoriteFoods.meats,
//       ...element.favoriteFoods.fish,
//     ];
//     for (i = 0; i < allFoods.length; i++) {
//       if (!countFood[allFoods[i]]) {
//         countFood[allFoods[i]] = 1;
//       } else countFood[allFoods[i]]++;
//     }
//   });
//   return countFood;
// };
// console.log(foodsCount(data));

//*    b) using two for each or map.
//?------ for each is more appropriate here because I only iterate over.

const objFood = {};
const foodsCount = (foods) => {
  foods.forEach((element) => {
    let allFoods = [
      ...element.favoriteFoods.meats,
      ...element.favoriteFoods.fish,
    ];
    allFoods.forEach((n) => {
      if (!objFood[n]) {
        objFood[n] = 1;
      } else objFood[n]++;
    });
  });
  return objFood;
};
const abc = foodsCount(data);
console.log(abc);
