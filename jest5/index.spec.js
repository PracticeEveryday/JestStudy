const app = require("./index");
const request = require("supertest");

describe("GET/ users는,", () => {
  // 우리가 만든 api 서버는 비동기도 돌아가기에 비동기 처리를 해야함
  // 함수 파라미터로 done 콜백 파라미터 넣어주고 테스트가 끝날때 done 콜백 함수 호출!
  it("...", (done) => {
    request(app)
      .get("/users")
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});
