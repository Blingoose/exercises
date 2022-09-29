const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

// const getTitleAndId = function (array) {
//   arrTitleId = [];
//   array.forEach((element) => {
//     arrTitleId.push({ name: element.title, id: element.id });
//   });
//   return arrTitleId;
// };

// console.log(getTitleAndId(newReleases));

//! 1)
// const newArr = [];
// getTitleAndId = (element) => {
//   return newArr.push({ name: element.title, id: element.id });
// };
// newReleases.forEach(getTitleAndId);
// console.log(newArr);

//! 2)
const newArr2 = [];
getTitleAndId = (element) => {
  return newArr2.push({ name: element.title, id: element.id });
};
newReleases.map(getTitleAndId);
console.log(newArr2);
