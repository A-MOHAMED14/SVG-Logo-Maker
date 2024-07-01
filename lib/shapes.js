class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error("Render method should be implemented by subclasses.");
  }
}

module.exports = { Shape };
