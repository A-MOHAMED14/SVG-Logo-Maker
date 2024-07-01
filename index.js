const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter upto 3 characters:",
      validate: (input) =>
        input.length <= 3 || "Please enter no more than 3 characters.",
    },

    {
      type: "input",
      name: "textColor",
      message: "Enter a text color (keyword or hexadecimal):",
    },

    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },

    {
      type: "input",
      name: "shapeColor",
      message: "Enter a shape color (keyword or hexadecimal):",
    },
  ])
  .then((answers) => {
    let shape;

    switch (answers.shape) {
      case "circle":
        shape = new Circle();
        break;

      case "triangle":
        shape = new Triangle();
        break;

      case "square":
        shape = new Square();
        break;
    }

    shape.setColor(answers.shapeColor);

    const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill=${
    answers.textColor
  }>${answers.text}</text>

</svg>`;

    fs.writeFile("./output/logo.svg", svgContent, (err) => {
      err ? console.error("err") : console.log("Generated logo.svg");
    });
  })
  .catch((error) => {
    error.isTtyError
      ? console.error("Couldn't be rendered in the current environment")
      : console.error("Something else went wrong...", error);
  });
