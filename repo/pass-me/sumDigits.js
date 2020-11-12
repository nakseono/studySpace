/*
"sumDigits" 함수를 작성합니다.

숫자가 주어졌을때, "sumDigits" 함수는 숫자의 각 자리수를 모두 더한 값을 반환합니다.
만약 숫자가 음수라면, 첫번째 자릿수는 음수로 고려되어야 합니다.

let output1 = sumDigits(1148);
console.log(output1); // --> 14

let output2 = sumDigits(-316);
console.log(output2); // --> 4
*/

function sumDigits(num) {
  let pre = 0;
  const result = num.toString().split('');

  if (result[0] === '-') {
    for (let i = 2; i < result.length; i++) {
      pre = Number(result[i]) + pre;
    }
    return pre - Number(result[1]);
  }

  for (let i = 0; i < result.length; i++) {
    pre += Number(result[i]);
  }
  return pre;
}

module.exports = sumDigits;
