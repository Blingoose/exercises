import fs from "fs";

//? 1. Create a new txt file using the same fs module method we have learned before.
const lyrics = `I'm Slim Shady, yes, I'm the real Shady
All you other Slim Shadys, are just imitating
So won't the real Slim Shady, please stand up?
Please stand up, please stand up`;

fs.writeFile("eminem-slimShady.txt", lyrics, "utf8", (err) => {
  if (err) throw err;
  console.log("Writing successful");
});

//? 2. Create a copy of the newly created txt file using a method from the fs module.
fs.copyFile("./eminem-slimShady.txt", "slim-shady.txt", (err) => {
  if (err) {
    console.log("Error found:", err);
  }
  console.log("Copying finished");
});

//? 3. Rename one of the files using a method from the fs module.
fs.rename("./eminem-slimShady.txt", "eminem-slim-shady.txt", (err) => {
  if (err) throw err;
  console.log("Rename finished");
});

//? 4. Get a list of all the file names of the current directory using a method from the fs module.
const testFolder = ".";

fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
  if (err) {
    throw err;
  }
});

//? 5. Find out and implement another method for the fs module.
fs.unlink("./fileToDelete.js", (err) => {
  if (err) throw err;
  console.log("Delete file successfilly");
});
