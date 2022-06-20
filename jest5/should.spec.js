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

  // it("equal", () => {
  //   const value = undefined;
  //   should.strictEqual(undefined, value);
  //   should.strictEqual(false, value);
  //   (4).should.equal(4);
  //   "test".should.equal("test")[(1, 2, 3)].should.not.equal([1, 2, 3]);
  // });

  it("within", () => {
    const user = {
      age: 30,
    };
    user.age.should.be.within(5, 50);
  });

  // it("a", () => {
  //   "test".should.be.a("string");
  // });

  it("instanceof", () => {
    [].should.be.an.instanceOf(Array);
  });

  it("above", () => {
    const age = 30;
    age.should.be.above(20);
  });

  it("below", () => {
    const age = 30;
    age.should.be.below(1100);
  });

  it("length", () => {
    const arr = [1, 2, 3];
    arr.should.be.length(3);
  });

  it("property", () => {
    const user = {
      name: "kim",
      age: 30,
    };

    user.should.have.property("name");
    user.should.have.property("name", "kim");
  });
});
