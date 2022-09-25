var _ = require("lodash");
// Load the core build.

const bookObj1 = {
  book: "Child 44",
  author: "Tom Rob Smith",
  published: 2008,
};

const bookObj2 = {
  book: "How to win friends and Influence people",
  author: "Charles Duhigg",
  published: 2012,
};

const bookUtils = {
  getFirstPublished(book1, book2) {
    let firstPublished = null;
    book1.published > book2.published
      ? (firstPublished = book2)
      : book1.published < book2.published
      ? (firstPublished = book1)
      : (firstPublished = [book2, book1]);
    return firstPublished;
  },
  setNewEdition(book, editYear) {
    book.latestEdition = editYear;
  },
  setLanguage(book, lang) {
    book.laguage = lang;
  },
  setTranslation(book, lang, translator) {
    book.translation = { translator, lang };
  },
  setPublisher(book, name, location) {
    book.publisher = { name, location };
  },
  isSamePublisher(book1, book2) {
    let abc =
      //   JSON.stringify(book1.author === JSON.stringify(book2.author))
      _.isEqual(book1.publisher, book2.publisher) ? true : false;
    return abc;
  },
};

console.log(bookUtils.getFirstPublished(bookObj1, bookObj2));
bookUtils.setNewEdition(bookObj1, 2010);
bookUtils.setTranslation(bookObj2, "Hebrew", "Amir Ben Dadon");
bookUtils.setPublisher(bookObj1, "Yoav Itzhak", "Modan");
bookUtils.setPublisher(bookObj2, "Yoav Itzhak", "Modan");
console.log(
  `Is same publisher = ${bookUtils.isSamePublisher(bookObj1, bookObj2)}`
);
// console.log(bookObj1);
// console.log(bookObj2);
