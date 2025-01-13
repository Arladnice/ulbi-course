import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("test")).toBe("test");
  });

  test("with additional class", () => {
    const expected = "test class1 class2";
    expect(classNames("test", {}, ["class1", "class2"])).toBe(expected);
  });

  test("with mods", () => {
    const expected = "test class1 class2 hovered scrollable";
    expect(classNames("test", { hovered: true, scrollable: true }, ["class1", "class2"])).toBe(expected);
  });

  test("with mods false", () => {
    const expected = "test class1 class2 hovered";
    expect(classNames("test", { hovered: true, scrollable: false }, ["class1", "class2"])).toBe(expected);
  });

  test("with mods undefined", () => {
    const expected = "test class1 class2 hovered";
    expect(classNames("test", { hovered: true, scrollable: undefined }, ["class1", "class2"])).toBe(expected);
  });
});
