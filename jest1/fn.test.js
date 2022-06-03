const fn = require("./fn");

test("1은 1이야", () => {
  expect(1).toBe(1);
});

// toBe 부분에서 사용하는 함수를 Matcher 하고 함.
test("2 더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5야", () => {
  expect(fn.add(3, 3)).toBe(6);
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toBe({
    name: "Mike",
    age: 30,
  });
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});

// 좀더 엄격칸 strict를 사용하는 것
test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
    gender: undefined,
  });
});
