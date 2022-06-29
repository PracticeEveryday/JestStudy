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
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);

  if (Number.isNaN(limit)) {
    // return을 안 넣어주면 아래 코드 다 실행 되서 중복 ㅠ
    return res.status(400).end();
  }
  res.json(users.slice(0, limit));
});

// get users/:id 라우터 추가!
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.filter((item) => item.id === id)[0];
  res.status(201).json(user);
});
app.listen(3000, console.log("3000번 포트 온"));

module.exports = app;
