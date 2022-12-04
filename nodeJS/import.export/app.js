//? What is the difference between import and require?
// Answer
//* 1. Require statements can be called anywhere in the code
//* 2. Require can be called conditionally
//* 3. Import statements are asynchronous and they are known to perform well compared to 'require' functions in large-scale applications.
//* 4. ES modules are the future - ES module system was introduced as a standard to maintain Client-side JavaScript modules.
//* 5. Different syntax.

//? How can you enable using the import syntax using node js
// Answer
//* 1. Either by using a file extension which ends as .mjs, or
//* 2. By adding "type":"module" inside the package.json

//? Give 2 node.js environment variables that are not available when using the import syntax.
// answer
//* 1. The first env variable is __filename
//* 2. The second env variable is __dirname

//* More info
// The most standardized way in 2021

// import { URL } from 'url'; // in Browser, the URL in native accessible on window

// const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
// const __dirname = new URL('.', import.meta.url).pathname;
// And forget about join to create paths from the current file, just use the URL
// const pathToAdjacentFooFile = new URL('./foo.txt', import.meta.url).pathname;
// const pathToUpperBarFile = new URL('../bar.json', import.meta.url).pathname;

//? Create 3 functions using the export/import syntax. Import the file system module using the import syntax.

import { sumOfNums, divideNums, print } from "./utils.js";
import fs from "fs";

const arrOfNums = [40, 20, 30];
const sum = sumOfNums(arrOfNums);
const average = divideNums(sum, arrOfNums.length);
print(average);

const resToTextFile = fs.createWriteStream("Result.txt", "utf8");
resToTextFile.write(`The average of ${arrOfNums} is ${average}`);
resToTextFile.on("finish", () => console.log("wrote all data to file"));
resToTextFile.end();
