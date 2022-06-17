const express = require("express");
const app = express();
const morgan = require("morgan");

const users = [
  { id: 1, name: "kim" },
  { id: 2, name: "lee" },
  { id: 3, name: "park" },
];

app.use(morgan("dev"));

app.get("/users", (req, res) => {
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10); // "2"
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }
  res.json(users.slice(0, limit));
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const user = users.filter((user) => user.id === id)[0];
  if (!user) return res.status(404).end();

  res.json(user);
});
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users.filter((user) => user.id !== id);
  res.status(204).end();
});

app.listen(3000, () => console.log("3000번 포트 온"));

module.exports = app;
