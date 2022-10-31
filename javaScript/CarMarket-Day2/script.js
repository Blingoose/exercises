/** 2)
   create a car Market Object 
   fetch all data from the API and assign it to the carMarketObj
   add spinner to see that everything works
   and show message when done
   */
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies/:id
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers/:id:
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/tax

const carMarket = {};

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("error");
  }
}
const fetchId = async (url, searchId) => {
  let data1 = await fetchData(url);

  const agenciesID = [];
  data1.forEach((agency) => {
    agenciesID.push(agency[searchId]);
  });

  return agenciesID;
};
const getData = async (arr, temp) => {
  let idArr = await Promise.all(arr);

  const tempArr = [];
  for (let id of idArr) {
    let res = fetchData(
      `https://capsules7.herokuapp.com/api/carMarket/${temp}/${id}`
    );

    tempArr.push(res);
  }
  const promises = await Promise.all(tempArr);
  return promises;
};

const test = async () => {
  const fetchbla = await fetchId(
    "https://capsules7.herokuapp.com/api/carMarket/agencies",
    "agencyId"
  );
  const fetchbla2 = await fetchId(
    "https://capsules7.herokuapp.com/api/carMarket/customers",
    "id"
  );

  const agencies = [];
  const customers = [];
  const tax = [];
  agencies.push(getData(fetchbla, "agencies"));
  const agenciesProm = await Promise.all(agencies);
  carMarket.sellers = agenciesProm.flat();

  customers.push(getData(fetchbla2, "customers"));
  const customersProm = await Promise.all(customers);
  carMarket.customers = customersProm.flat();

  const taxData = await fetchData(
    "https://capsules7.herokuapp.com/api/carMarket/tax"
  );
  tax.push(taxData);
  carMarket.taxesAuthority = tax;
};
test();

console.log(carMarket);
