const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");

const user = fs.readFileSync("./data.txt", "utf8");

app.use(morgan());

app.get("/users", (req, res) => {
  res.json(user);
});

app.listen(3000, () => console.log("3000번 포트 온"));
