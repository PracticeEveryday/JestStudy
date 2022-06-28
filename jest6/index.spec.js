const request = require("supertest");
const should = require("should");
const app = require("./index");

// 보통 http 이름을 써줌
describe("GET users/", () => {
  it("성공 시 유저 객체를 담은 배열로 응답한다.", (done) => {
    // 우리가 만든 api 서버는 모두 비동기로 동작하게 됨!!
    // 비동기 처리 해주기 it 2번째 파라미터의 함수에 done이란 콜백 함수를 넣어주고 테스트가 끝나는 시점에 done콜백 함수 호출해주면 끝
    request(app)
      .get("/users")
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});
