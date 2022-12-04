// const fs = require("fs");

// fs.writeFileSync("notes.txt", "This file was created by Node.js");

// const myFile = fs.readFileSync("notes.txt", "utf8");

// console.log(myFile);
// fs.appendFileSync(
//   "notes.txt",
//   " 'This text was appended to the existing text'"
// );

// const newAppendedText = fs.readFileSync("notes.txt", "utf8");
// console.log(newAppendedText);

// const add = require("./utils");
const myNotes = require("./notes");

console.log(myNotes(["first note", "second note", "third note", "forth note"]));
