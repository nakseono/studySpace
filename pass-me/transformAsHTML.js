/*
"transformAsHTML" 함수를 작성합니다.

사원들의 정보를 HTML 엘리먼트의 형태로 변형할 수 있는 함수 "transformAsHTML" 함수를 작성하세요.
사원들의 정보는 아래와 같은 배열로 주어질 수 있습니다.

[
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
];

위의 배열이 input으로 주어진다면, transformAsHTML을 통해 container라는 id를 가진 엘리먼트에 다음과 같이 HTML로 렌더링되어야 합니다.

<ul id="container">
  <li>
    <a class="name">Joe Blow</a>
    <div class="age">42</div>
  </li>
  <li>
    <a class="name">Mary Jenkins</a>
    <div class="age">36</div>
  </li>
</ul>

* Note 1:
<a> 태그로 만들어진 사원의 이름을 클릭할 경우, 제공되는 printRole 함수를 실행하여,
해당 사원의 role이 콘솔에 출력되도록 하십시오.

* Note 2:
여기에는 HTML 파일이 존재하지 않으므로 <template>을 사용할 수 없습니다.

*/

global.printRole = function(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.

  // global이라는 낯선 개념이 등장했지만, 걱정하지 마세요.
  // 이 함수 역시 printRole(user) 로 호출할 수 있습니다.
  console.log(user.role);
};

function transformAsHTML(array) {
  for(let i = 0; i < array.length; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    let div = document.createElement('div');

    document.getElementById('container').appendChild(li);
    li.appendChild(a);
    li.appendChild(div);
    a.className = 'name';
    a.textContent = array[i].firstName + ' ' + array[i].lastName;
    div.className = 'age';
    div.textContent = array[i].age;
  }
  
  for(let i = 0; i < array.length; i++) {
    document.getElementsByClassName('name')[i].onclick = function() {
      printRole(array[i]);
    }
  }
}

module.exports = transformAsHTML;
