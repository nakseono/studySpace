<<<<<<< HEAD
/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  add, substract, multiply, divide,
} from '../math';

describe('#1. test-example 테스트', () => {
  // 1. Create test case to check add function works what it is supposed to be.
  it('add func works by "1 + 2 = 3"', () => {
    expect(add(1, 2)).toEqual(3);
  });
  // 2. Create test case to check substract function works what it is supposed to be.
  it('substract func works by "3 - 1 = 2"', () => {
    expect(substract(3, 1)).toEqual(2);
  });
  // 3. Create test case to check multiply function works what it is supposed to be.
  it('multiply func works by "5 * 5 = 25"', () => {
    expect(multiply(5, 5)).toEqual(25);
  });
  // 4. Create test case to check divide function works what it is supposed to be.
  it('divide func works by "10 / 2 = 5"', () => {
    expect(divide(10, 2)).toEqual(5);
  });
  // 5. Create test case to check divide function returns “cannot divide something with 0"
  // when it tries to divdie a number with zero.
  it('divide func cannot divied 5 with 0', () => {
    expect(divide(5, 0)).toEqual(Infinity);
  });
  // 6. Group tests using `describe()`
});
=======
// math.test.js
const { add, substract, multiply, divide } = require("../math");

    describe("#1. jest test", () => {
    // 1. Create test case to check add function works what it is supposed to be.
    it('add', () => {
    expect(add(1, 2)).toEqual(3);
    })
    // 2. Create test case to check substract function works what it is supposed to be.
    it('substract', () => {
    expect(substract(3, 1)).toEqual(2);
    })
    // 3. Create test case to check multiply function works what it is supposed to be.
    it('multiply', () => {
    expect(multiply(5, 5)).toEqual(25);
    })
    // 4. Create test case to check divide function works what it is supposed to be.
    it('divide', () => {
    expect(divide(10, 2)).toEqual(5);
    })
    // 5. Create test case to check divide function returns "cannot divide something with 0"
    // when it tries to divdie a number with zero.
    it('divide func cannot divied', () => {
    expect(divide(5, 0)).toEqual(Infinity);
    })
// 6. Group tests using `describe()`
});


>>>>>>> 747e07e1c99b4ae7aa043cff22478589af635941
