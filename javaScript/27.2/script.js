const arr1 = ["we", "are", "the", "champions"];
const arr2 = ["hello", 2, "everybody"];
const str = "What's up baby?";

function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    let upperCased = [];
    arr.forEach((e, i, arr) => {
      if (typeof e === "string" && Array.isArray(arr)) {
        upperCased[i] = e.toUpperCase();
      } else {
        reject({ status: 404, action: "rejected" });
      }
    });
    resolve({ data: upperCased, status: 200, action: "words to uppercase" });
  });
}
function sortWords(arr) {
  return new Promise((resolve, reject) => {
    const isString = (e) => typeof e === "string";
    if (Array.isArray(arr) && arr.every(isString)) {
      let sorted = arr.sort();
      resolve({ data: sorted, status: 200, action: "sorted" });
    } else reject({ status: 403, action: "rejected" });
  });
}

makeAllCaps(arr1)
  .then((res) => {
    console.log(res.action);
    return sortWords(res.data);
  })
  .then((res) => {
    console.log(res.action);
    console.log(res.data);
  })
  .catch((err) => {
    const error = "Not found";
    if (err.status === undefined) {
      console.log(error);
    } else console.log(`Error ${err.status}`);
  });
