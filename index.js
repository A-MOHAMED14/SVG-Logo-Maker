const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
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
  ])
  .then((answers) => {
    writeToFile(answers);
  })
  .catch((error) => {
    error.isTtyError
      ? console.error("Couldn't be rendered in the current environment")
      : console.error("Something else went wrong...", error);
  });

function writeToFile(reponses) {
  fs.writeFile("./output/logo.svg", JSON.stringify(reponses), (err) => {
    err ? console.error("err") : console.log("Generated logo.svg");
  });
}
