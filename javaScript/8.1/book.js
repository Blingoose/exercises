const book1 = {
  name: "Loooping with Fred",
  authorName: "Mor Di Halas ",
  published: 2022,
  pages: 350,
  editions: 2,
};

const func = () => {
  return `The book ${book1.name} was written by ${book1.authorName}in the year ${book1.published}`;
};

console.log(func());
