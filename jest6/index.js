import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
const app = express();

const users = [
  { id: 1, name: "kim" },
  { id: 2, name: "lee" },
  { id: 3, name: "park" },
];

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

  if (Number.isNaN(id)) {
    return res.status(400).end();
  }
  const user = users.filter((item) => item.id === id)[0];

  if (!user) {
    return res.status(404).end();
  }
  res.status(201).json(user);
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).end();
  }
  const user = users.filter((item) => item.id !== id);
  res.status(204).json(user);
});

app.post("/users", (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).end();
  } else if (users.filter((item) => item.name === name).length) {
    return res.status(409).end();
  }
  const id = Date.now();
  const user = { id, name };
  users.push(user);
  console.log(user);
  res.status(201).json(user);
});

app.listen(3000, console.log("3000번 포트 온"));

export { app };
