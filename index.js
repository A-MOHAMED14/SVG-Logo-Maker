const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    name: "text",
    message: "Enter upto 3 characters",
  },

  {
    type: "input",
    name: "textColour",
    message: "Enter a text colour",
  },

  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },

  {
    type: "input",
    name: "shapeColour",
    message: "Enter a shape colour",
  },
]);
