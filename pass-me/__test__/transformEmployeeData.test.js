const transformEmployeeData = require("../transformEmployeeData");

describe("transformEmployeeData", function() {
  let input;
  let spyMap;
  let spyReduce;
  beforeEach(function() {
    spyMap = jest.spyOn(Array.prototype, "map");
    spyReduce = jest.spyOn(Array.prototype, "reduce");
    input = [
      [
        ["firstName", "Joe"],
        ["lastName", "Blow"],
        ["age", 42],
        ["role", "clerk"]
      ],
      [
        ["firstName", "Mary"],
        ["lastName", "Jenkins"],
        ["age", 36],
        ["role", "manager"]
      ],
      [
        ["firstName", "Steve"],
        ["lastName", "Lee"],
        ["city", "Seoul"],
        ["favoriteFood", "noodle"]
      ]
    ];
  });

  test("reduce 함수가 직원 수만큼 호출되어야 합니다", function() {
    transformEmployeeData(input);
    expect(spyReduce).toHaveBeenCalledTimes(input.length);
  });

  test("map 함수가 한번 이상 호출되어야 합니다", function() {
    transformEmployeeData(input);
    expect(spyMap).toHaveBeenCalled();
  });

  test("객체들을 포함한 배열을 리턴해야 합니다", function() {
    let output = transformEmployeeData(input);
    expect(typeof output[0]).toBe("object");
    expect(Array.isArray(output)).toBe(true);
  });

  test("직원들의 데이터를 올바르게 변환해야 합니다", function() {
    let output = transformEmployeeData(input);
    let expected = [
      { firstName: "Joe", lastName: "Blow", age: 42, role: "clerk" },
      { firstName: "Mary", lastName: "Jenkins", age: 36, role: "manager" },
      {
        firstName: "Steve",
        lastName: "Lee",
        city: "Seoul",
        favoriteFood: "noodle"
      }
    ];
    expect(expected).toEqual(output);
  });
});
