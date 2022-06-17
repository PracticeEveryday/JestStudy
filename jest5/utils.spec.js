const utils = require("./utils");
const should = require("should");

// 단위 테스트 하나의 함수만 테스트 하는 것
describe("utils.js 모듈의 capitalize() 함수는", () => {
  it("문자열의 첫번째 문자를 대문자로 변환한다.", () => {
    const result = utils.capitalize("hello");
    result.should.be.equal("Hello");
  });
});
