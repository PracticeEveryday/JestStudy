const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");

const user = fs.readFileSync("./data.txt", "utf8");

app.use(morgan("dev"));

app.get("/users", (req, res) => {
  res.json(user);
});

app.listen(3000, () => console.log("3000번 포트 온"));

module.exports = app;
