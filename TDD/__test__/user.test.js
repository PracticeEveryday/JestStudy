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

      after(async () => {
        // 모든 테스트가 종료되고 이게 마지막으로 실행된다.
        if (mongoose.connection) {
          await mongoose.connection.dropDatabase();
          await mongoose.disconnect();
        }
      });

      request(app)
        .get("/user")
        .expect(200)
        .end((err, res) => {
          res.body.should.be.instanceof(Array);
          console.log(res.body);
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
