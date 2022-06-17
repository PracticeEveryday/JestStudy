// 동기적
const fs = require("fs");

const read = fs.readFileSync("./data.txt", "utf8");

console.log(read);

// 비동기적
const data2 = fs.readFile("./data.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log(1);

/*
 This is data file
 1
 This is data file
 */
