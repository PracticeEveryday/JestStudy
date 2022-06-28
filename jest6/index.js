const express = require("express");
const morgan = require("morgan");
const app = express();

const users = [
  { id: 1, name: "kim" },
  { id: 2, name: "lee" },
  { id: 3, name: "park" },
];

// middleware
app.use(morgan("dev"));

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, console.log("3000번 포트 온"));
