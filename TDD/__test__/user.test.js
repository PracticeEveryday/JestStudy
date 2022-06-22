import request from "supertest";
import should from "should";

import mongoose from "mongoose";
const databaseName = "test";

import { app } from "../app.js";

describe("GET /users", () => {
  describe("성공시", () => {
    it.only("유저 객체를 담은 배열로 응답함", (done) => {
      before(async () => {
        const url = `mongodb://127.0.0.1/${databaseName}`;
        await mongoose.connect(url, { useNewUrlParser: true });
      });

      request(app)
        .get("/user")
        .expect(200)
        .end((err, res) => {
          console.log(res.body);
          res.body.should.be.instanceof(Array);
          done();
        });
    });
  });
});

describe("GET /", () => {
  describe("성공시", () => {
    it('객체 status : "succ"을 반환한다.', () => {
      request(app)
        .get("/")
        .end((err, res) => {
          console.log(res.body);
          res.body.should.have.property("status", "succ");
        });
    });
  });
});
