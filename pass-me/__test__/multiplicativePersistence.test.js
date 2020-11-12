const multiplicativePersistence = require("../multiplicativePersistence");

describe("multiplicativePersistence", function() {
  test("234를 인자로 넘길 경우 8을 리턴해야 합니다", function() {
    expect(multiplicativePersistence(234)).toBe(8);
  });

  test("786를 인자로 넘길 경우 0을 리턴해야 합니다", function() {
    expect(multiplicativePersistence(786)).toBe(0);
  });

  test("2248을 인자로 넘길 경우 6을 리턴해야 합니다", function() {
    expect(multiplicativePersistence(2248)).toBe(6);
  });

  test("2300을 인자로 넘길 경우 0을 리턴햐야 합니다", function() {
    expect(multiplicativePersistence(2300)).toBe(0);
  });
});
