/* eslint-disable */
const dancers = [];

function handleClickDancerButton() {
  /* makeBlinkyDancer is the dancer maker functions available in global scope.
   * A new object of the given type will be created and added
   * to the stage.
   */

  // make a dancer with a random position
  //
  // TODO:
  let dancer = new BlinkyDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random());

  dancers.push(dancer);
  // dancer.step();
  // dancer.setPosition();
  document.body.appendChild(dancer.$node);
}

function lineUpFunc() {
  dancers.forEach((element) => {
    element.lineup(600)
  })
}


let topBar = document.querySelector('.topbar');

let makeLineUpButton = document.createElement('a');
makeLineUpButton.classList.add('lineUpBtn');
makeLineUpButton.textContent = 'Drop Apple'
topBar.appendChild(makeLineUpButton);

window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.addDancerButton');
  elAddDancerButton.addEventListener('click', handleClickDancerButton);

  const lineUp = document.querySelector('.lineUpBtn');
  lineUp.addEventListener('click', lineUpFunc);
});



// 2가지 종류의 dancer 를 작성 -> 색 변경 / 크게 or 작게 / 회전
// 마우스 클릭에 반응.