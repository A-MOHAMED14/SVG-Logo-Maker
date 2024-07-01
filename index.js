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
  })
  .catch((error) => {
    error.isTtyError
      ? console.error("Couldn't be rendered in the current environment")
      : console.error("Something else went wrong...", error);
  });
