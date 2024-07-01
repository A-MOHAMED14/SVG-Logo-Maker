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

class Circle {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}
