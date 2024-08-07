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

describe("Triangle", () => {
  test("Triangle render", () => {
    const expected = `<polygon points="150, 18 244, 182 56, 182" fill="orange" />`;
    const shape = new Triangle();
    shape.setColor("orange");
    const actual = shape.render();

    expect(actual).toEqual(expected);
  });
});

describe("Square", () => {
  test("Square render", () => {
    const expected = `<rect x="50" y="50" width="200" height="200" fill="blue" />`;
    const shape = new Square();
    shape.setColor("blue");
    const actual = shape.render();

    expect(actual).toEqual(expected);
  });
});
