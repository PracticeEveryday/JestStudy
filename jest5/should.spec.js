const should = require("should");

describe("exist test", () => {
  it("exist 존재한다는 뜻", () => {
    const foo = {};
    should.exist({});
    should.exist([]);
    should.exist("");
    // should.exist(null);
    // should.exist(undefined);
    should.not.exist(null);
    should.not.exist(undefined);
    true.should.be.ok;
    "yay".should.be.ok;
    (1).should.be.ok;

    false.should.not.be.ok;
    "".should.not.be.ok;
    (0).should.not.be.ok;
  });
  it("true/ false", () => {
    true.should.be.true;
    "1".should.be.true;

    false.should.be.false;
    (0).should.not.be.false;
  });

  it("arguments is check instance of Arguments", () => {
    const args = (function () {
      return arguments;
    })(1, 2, 3);
    args.should.be.arguments;
    //[].not.should.be.arguments;
  });

  it("empty is object length Zero", () => {
    [].should.be.empty;
    "".should.be.empty;
    ({ length: 0 }.should.be.empty);
  });
});
