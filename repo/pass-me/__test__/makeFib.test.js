const makeFib = require("../makeFib");

describe("makeFib", function() {
  var fn;
  beforeEach(function() {
    fn = makeFib();
  });

  test("함수를 리턴해야 합니다", function() {
    expect(typeof fn).toBe("function");
  });

  test("리턴된 함수를 한번 실행했을 때는 0을 리턴해야 합니다", function() {
    expect(fn()).toBe(0);
  });

  test("리턴된 함수를 두번째 실행했을 때는 1을 리턴해야 합니다", function() {
    fn();
    expect(fn()).toBe(1);
  });

  test("리턴된 함수의 실행 횟수에 따라, 피보나치 수열에서의 인덱스 값을 리턴해야 합니다", function() {
    expect(fn()).toBe(0);
    expect(fn()).toBe(1);
    expect(fn()).toBe(1);
    expect(fn()).toBe(2);
    expect(fn()).toBe(3);
    expect(fn()).toBe(5);
    expect(fn()).toBe(8);
    expect(fn()).toBe(13);
    expect(fn()).toBe(21);
    expect(fn()).toBe(34);
    expect(fn()).toBe(55);
    expect(fn()).toBe(89);
  });
});
