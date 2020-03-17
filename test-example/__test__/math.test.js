// math.test.js
const {
  add, substract, multiply, divide,
} = require('../math');

describe('#1. jest test', () => {
  // 1. Create test case to check add function works what it is supposed to be.
  it('add', () => {
    expect(add(1, 2)).toEqual(3);
  });
  // 2. Create test case to check substract function works what it is supposed to be.
  it('substract', () => {
    expect(substract(3, 1)).toEqual(2);
  });
  // 3. Create test case to check multiply function works what it is supposed to be.
  it('multiply', () => {
    expect(multiply(5, 5)).toEqual(25);
  });
  // 4. Create test case to check divide function works what it is supposed to be.
  it('divide', () => {
    expect(divide(10, 2)).toEqual(5);
  });
  // 5. Create test case to check divide function returns "cannot divide something with 0"
  // when it tries to divdie a number with zero.
  it('divide func cannot divied', () => {
    expect(divide(5, 0)).toEqual(Infinity);
  });
// 6. Group tests using `describe()`
});
