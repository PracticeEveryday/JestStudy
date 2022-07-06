import { Router } from "express";

import { users } from "../../db";

export default (app) => {
  const userRouter = Router();

  app.use("/users", userRouter);

  userRouter.get("/", (req, res) => {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);

    if (Number.isNaN(limit)) {
      // return을 안 넣어주면 아래 코드 다 실행 되서 중복 ㅠ
      return res.status(400).end();
    }
    res.json(users.slice(0, limit));
  });

  // get users/:id 라우터 추가!
  userRouter.get("/:id", (req, res) => {
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

  userRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (Number.isNaN(id)) {
      return res.status(400).end();
    }
    const user = users.filter((item) => item.id !== id);
    res.status(204).json(user);
  });

  userRouter.post("/", (req, res) => {
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
};
