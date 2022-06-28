const utils = require("./utils");
// node 내장된 맞다 안맞다 검증 모듈
const assert = require("assert");
// should를 통해 가독성을 높일 수 있다!!
const should = require("should");

// test suite
describe("utils.js 모듈의 capitalize함수는 ", () => {
  it("문자열의 첫번째 문자를 대문자로 변환한다", () => {
    // test code 작성!!
    const result = utils.capitalize("hello");
    assert.equal(result, "Hello");
    result.should.be.equal("Hello");
  });
});

// test code는 node가 실행 할 수 없고 mocha가 해주는 거임
// yarn add mocha -D 개발환경에서만 필요한 모듈이다!!
// devDependencies 개발 환경에서 필요한 모듈들!!
// 모카는 실행 파일 형태로 노드 모듈안에 있음
// node_modules/.bin/mocha

// describe 와 it으로 테스트 코드를 작성하고 작성된 코드를 돌려주는 친구가 mocha다!!
