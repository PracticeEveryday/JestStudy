const fn = require("./fn");

// toBeNull
// toBeUndefined
// toBeDefined

test("null은 null입니다", () => {
  expect(null).toBeNull();
});
test("undefined Undefined", () => {
  expect(undefined).toBeUndefined();
});

// toBeTruthy
// toBeFalsy

test("0은 false 입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("비어 있지 않은 문자열은 참입니다.", () => {
  expect("hello").toBeTruthy();
});

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다.

test("ID는 10자 이내여야 합니다.", () => {
  const id = "KIM";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호는 4자리", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
});

test("비밀번호는 4자리", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

// JS는 소숫점을 제대로 계산하지 못함.
test("0.1 더하기 0.2는 0.3입니다.", () => {
  expect(fn.add(0.1 + 0.2)).toBe(0.3);
});

// 근사치 인지 확인 !!
test("0.1 더하기 0.2는 0.3입니다2.", () => {
  expect(fn.add(0.1 + 0.2)).toBeCloseTo(0.3);
});

// 대소문자 구분함!!
test("Hello World에는 a라는 글자가 있나?", () => {
  expect("Hello World").toMatch(/H/);
});

// 뒤에 i붙이면 됨
test("Hello World에는 a라는 글자가 있나?", () => {
  expect("Hello World").toMatch(/h/i);
});

// toContail
test("유저 리스트에 Mike가 있나?", () => {
  const userList = ["Tom", "Jane", "Kai"];
  const user = "Tom";
  expect(userList).toContain(user);
});

test("유저 리스트에 Mike가 있나?", () => {
  const userList = ["Tom", "Jane", "Kai"];
  const user = "Mike";
  expect(userList).toContain(user);
});
