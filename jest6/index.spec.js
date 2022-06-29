const request = require("supertest");
const should = require("should");
const app = require("./index");

// 보통 http 이름을 써줌
describe("GET users/", () => {
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
