import { users } from "../db";

export class UserService {
  finds(req, res) {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);

    if (Number.isNaN(limit)) {
      // return을 안 넣어주면 아래 코드 다 실행 되서 중복 ㅠ
      return res.status(400).end();
    }
    res.json(users.slice(0, limit));
  }

  findOne(req, res) {
    const id = parseInt(req.params.id, 10);

    if (Number.isNaN(id)) {
      return res.status(400).end();
    }
    const user = users.filter((item) => item.id === id)[0];

    if (!user) {
      return res.status(404).end();
    }
    res.status(201).json(user);
  }

  deleteUser(req, res) {
    const id = parseInt(req.params.id, 10);

    if (Number.isNaN(id)) {
      return res.status(400).end();
    }
    const user = users.filter((item) => item.id !== id);
    res.status(204).json(user);
  }

  addUser(req, res) {
    const name = req.body.name;
    if (!name) {
      return res.status(400).end();
    } else if (users.filter((item) => item.name === name).length) {
      return res.status(409).end();
    }
    const id = Date.now();
    const user = { id, name };
    users.push(user);
    res.status(201).json(user);
  }
}
