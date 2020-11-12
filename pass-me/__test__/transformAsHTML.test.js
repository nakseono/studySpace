const transformAsHTML = require("../transformAsHTML");

describe("transformAsHTML", function() {
  let input;
  let container;
  let spy;
  beforeEach(function() {
    document.body.innerHTML = '<ul id="container"></ul>';
    container = document.getElementById("container");
    input = [
      { firstName: "Joe", lastName: "Blow", age: 42, role: "clerk" },
      { firstName: "Mary", lastName: "Jenkins", age: 36, role: "manager" }
    ];
    spy = jest.spyOn(global, "printRole");
  });

  test("결과 창 안에는 li 엘리먼트가 직원 수만큼 존재해야 합니다", function() {
    transformAsHTML(input);
    expect(container.children.item(0).nodeName).toBe("LI");
    expect(container.children.item(1).nodeName).toBe("LI");
    container.innerHTML = "";
  });

  test("li 엘리먼트의 구성이 문제에 제시된 html과 일치해야 합니다", function() {
    transformAsHTML(input);
    expect(container.children.item(0).children.item(0).outerHTML).toBe(
      '<a class="name">Joe Blow</a>'
    );
    expect(container.children.item(0).children.item(1).outerHTML).toBe(
      '<div class="age">42</div>'
    );
    container.innerHTML = "";
  });

  test("이름을 클릭하면 printRole 함수가 실행되어야 합니다", function() {
    transformAsHTML(input);
    container.children
      .item(0)
      .children.item(0)
      .click();
    container.children
      .item(1)
      .children.item(0)
      .click();

    expect(spy).toHaveBeenCalledTimes(2);
  });
});
