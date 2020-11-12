const ctx = require("../getObjectById");

describe("getObjectById", function() {
  let spy;
  beforeEach(function() {
    spy = jest.spyOn(ctx, "getObjectById");
  });

  test("id와 매칭되는 객체를 리턴해야 합니다", function() {
    expect(ctx.getObjectById(ctx.TREE_DATA.items, "1")).toEqual({
      id: "1",
      name: "johnny"
    });

    expect(spy).toHaveBeenCalled();
  });

  test("객체가 담겨있는 깊이만큼 함수가 호출되어야 합니다 (1)", function() {
    expect(ctx.getObjectById(ctx.TREE_DATA.items, "4")).toEqual({
      id: "4",
      name: "katy"
    });

    expect(spy).toHaveBeenCalledTimes(2);
  });

  test("객체가 담겨있는 깊이만큼 함수가 호출되어야 합니다 (2)", function() {
    expect(ctx.getObjectById(ctx.TREE_DATA.items, "7")).toEqual({
      id: "7",
      name: "penny",
      children: [
        {
          id: "8",
          name: "john"
        },
        {
          id: "9",
          name: "hoyong"
        }
      ]
    });

    expect(spy).toHaveBeenCalledTimes(3);
  });

  test("객체가 담겨있는 깊이만큼 함수가 호출되어야 합니다 (3)", function() {
    expect(ctx.getObjectById(ctx.TREE_DATA.items, "9")).toEqual({
      id: "9",
      name: "hoyong"
    });

    expect(spy).toHaveBeenCalledTimes(4);
  });
});
