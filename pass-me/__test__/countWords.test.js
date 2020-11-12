const countWords = require("../countWords");

describe("countWords", function() {
  test("객체를 리턴해야 합니다", function() {
    expect(typeof countWords("ask a bunch try a bunch get a bunch")).toBe(
      "object"
    );
  });

  test("단어들의 키 값으로 빈도수가 담긴 객체를 리턴해야 합니다", function() {
    expect(countWords("ask a bunch try a bunch get a bunch")).toEqual({
      ask: 1,
      a: 3,
      bunch: 3,
      try: 1,
      get: 1
    });
  });

  test("빈 문자열을 넘겼을 때는 빈 객체를 리턴해야 합니다", function() {
    expect(countWords("")).toEqual({});
  });
});
