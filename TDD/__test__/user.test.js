import request from "supertest";
import should from "should";

import { app } from "../app.js";

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
