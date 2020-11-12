/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */

// 배열의 모든 값을(배열 안의 자식 배열까지) 다 이어붙여라.. 가 문제 의도인 것 같다.
// 배열을 모두 붙이기 위해서는 concat 과 flat 을 사용하면 될 것 같다.
var printArray = function(array) {
  if(!Array.isArray(array)){
    return;
  }

  let flatArr = (arr) => {
    let newArr = arr.reduce((acc, anoArr) => {
      return acc.concat(Array.isArray(anoArr) ? )
    })
  }
};
// 참고 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
module.exports = printArray;