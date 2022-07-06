import request from "supertest";
import should from "should";
import { app } from "./index";

// 보통 http 이름을 써줌
describe("GET /users/", () => {
  describe("성공 시 ", () => {
    it("유저 객체를 담은 배열로 응답한다.", (done) => {
      // 우리가 만든 api 서버는 모두 비동기로 동작하게 됨!!
      // 비동기 처리 해주기 it 2번째 파라미터의 함수에 done이란 콜백 함수를 넣어주고 테스트가 끝나는 시점에 done콜백 함수 호출해주면 끝
      request(app)
        .get("/users")
        .end((err, res) => {
          //console.log(res.body);
          res.body.should.be.instanceof(Array);
          done();
        });
    });

    it("최대 limit 개수만큼 응답한다.", (done) => {
      request(app)
        .get("/users?limit=2")
        .end((err, res) => {
          res.body.should.have.lengthOf(2);
          done();
        });
    });
  });

  describe("실패 시", () => {
    it("limit이 숫자가 아니면 400을 응답", (done) => {
      request(app).get("/users?limit=two").expect(400).end(done);
    });
  });
});

// user/:id
describe("GET /users/id", () => {
  describe("성공 시", () => {
    it("id가 1인 유저를 반환한다.", (done) => {
      request(app)
        .get("/users/1")
        .end((err, res) => {
          // 기대하는 property이름, 나오는 값!
          res.body.should.have.property("id", 1);
          done();
        });
    });
  });

  describe("실패 시", () => {
    it("id가 숫자가 아닐 경우 400으로 응답한다.", (done) => {
      request(app).get("/users/one").expect(400).end(done);
    });

    it("id로 유저를 찾을 수 없을 경우 404응답", (done) => {
      request(app).get("/users/4").expect(404).end(done);
    });
  });
});

describe("DELETE /users/:id", () => {
  describe("성공 ", () => {
    it("204를 응답한다.", (done) => {
      request(app).delete("/users/1").expect(204).end(done);
    });
  });

  describe("실패", () => {
    it("id가 숫자가 아닌 경우 400으로 응답한다.", (done) => {
      request(app).delete("/users/one").expect(400).end(done);
    });
  });
});

describe("POST /users", () => {
  describe("성공 시", () => {
    // mocha 함수 중 before 메서드 활용 => 중복 줄이기 가능
    // test case가 동작하기 전에 미리 실행되는 함수이다!
    let name = "seo",
      body;
    before((done) => {
      request(app)
        .post("/users")
        // send 메소드를 통해 body값을 보낼 수 있음.
        .send({ name })
        .expect(201)
        .end((err, res) => {
          body = res.body;
          done();
        });
    });

    it("생성된 유저 객체를 반환한다.", () => {
      body.should.have.property("id");
    });

    it("입력한 name을 반환한다.", () => {
      body.should.have.property("name", "seo");
    });
  });

  describe("실패 시", () => {
    it("name 파라미터 누락 시 400을 반환한다.", (done) => {
      request(app).post("/users").send({}).expect(400).end(done);
    });

    it("name이 중복일 경우 409를 반환한다.", (done) => {
      request(app).post("/users").send({ name: "seo" }).expect(409).end(done);
    });
  });
});