/*
multiplicativePersistence 함수를 작성합니다.

multiplicativePersistence 함수는 양수를 파라미터로 받는 함수로,
각 자릿의 숫자들을 곱한 결과물들이 하나의 숫자가 될 때까지 반복적으로 곱한 후,
최후의 한 자리 숫자를 리턴하는 함수입니다.

예를 들어 786을 인자로 넘길 경우, 함수는 0을 리턴해야 합니다.
7 * 8 * 6 -> 336
3 * 3 * 6 -> 54
5 * 4 -> 20
2 * 0 -> 0

*/

function multiplicativePersistence(num) {
  const str = num.toString();
  const arr = str.split('');

  if (arr.length === 1) {
    return num;
  }
  if (arr.length > 1) {
    const result = arr.reduce((acc, val) => acc * val);
    return multiplicativePersistence(result);
  }
}

module.exports = multiplicativePersistence;
