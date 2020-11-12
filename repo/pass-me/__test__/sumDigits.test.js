const sumDigits = require("../sumDigits");

describe("sumDigits", function() {
  test("숫자를 리턴해야 합니다", function() {
    expect(typeof sumDigits(2002)).toBe("number");
  });
  test("0이 주어졌을 때 0을 리턴해야 합니다", function() {
    expect(sumDigits(0)).toBe(0);
  });
  test("음수가 포함되었을 때도 정확히 계산해야 합니다", function() {
    expect(sumDigits(-2004)).toBe(2);
  });
  test("정확한 값을 계산해야 합니다", function() {
    expect(sumDigits(2002)).toBe(4);
  });
});
