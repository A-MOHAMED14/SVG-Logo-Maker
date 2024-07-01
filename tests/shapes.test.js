const { Circle, Triangle, Square } = require("../lib/shapes.js");

describe("Circle", () => {
  test("Circle render", () => {
    const expected = `<circle cx="150" cy="100" r="80" fill="green" />`;
    const shape = new Circle();
    shape.setColor("green");
    const actual = shape.render();

    expect(actual).toEqual(expected);
  });
});
