const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const filterBookBy = (lib, filterCategory, filterBy) => {
  return lib.filter((book) =>
    book[filterCategory].toLowerCase().includes(filterBy.toLowerCase())
  );
};

const availableBook = filterBookBy(library, "title", "MocKingjay");
availableBook.forEach((element) => {
  console.log({
    "Book Name": element.title,
    "Author Name": element.author,
    "Reading Status": element.readingStatus,
  });
});
