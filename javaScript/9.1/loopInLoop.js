const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

const func = (list) => {
  for (i = 0; i <= list.length; i++) {
    let outer = list[i];
    for (j = 0; j < outer.length; j++) {
      console.log(outer[j]);
    }
  }
};

func(listOfNeighbours);
