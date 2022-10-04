const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

//* --------------------------------GET CANDY------------------------------------
// function getCandy(candy, id) {
//   const theCandyIs = candy.candies.find((candyById) => {
//     return candyById.id === id;
//   });
//   return { Candy: theCandyIs.name, ID: theCandyIs.id };
// }
// console.log(getCandy(candyStore, "as12f"));

// ------------------------------------GET PRICE------------------------------------
// function getPrice(candy, id) {
//   const theCandyIs = candy.candies.find((candyById) => {
//     return candyById.id === id;
//   });
//   return { Price: theCandyIs.price, ID: theCandyIs.id };
// }
// console.log(getPrice(candyStore, "5hd7y"));

//* --------------------------------ADD CANDY------------------------------------
function addCandy(candyStore, name, id, price) {
  return candyStore.candies.push({ name, id, price, amount });
}

const defaultAmount = 1;
let amount = defaultAmount;
addCandy(candyStore, (candy = "twist"), (id = "ichs6"), 6);
addCandy(candyStore, (candy = "timeout"), (id = "yay32"), 3, (amount = 50));
addCandy(candyStore, (candy = "milkey"), (id = "78xyz"), 2.5, (amount = 250));

console.log(candyStore);

// //* ------------------------------------BUY---------------------------------------
function buy(candyStore, id, amount) {
  const updateStats = candyStore.candies.find((e) => {
    if (e.id === id) {
      return (
        (e.amount -= amount), (candyStore.cashRegister += e.price * amount)
      );
    }
  });
  return updateStats;
}

buy(candyStore, (id = "78xyz"), (amount = 10));

console.log(candyStore);
