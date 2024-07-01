const inquirer = require("inquirer");
const fs = require("fs");

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
      name: "textColour",
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
      name: "shapeColour",
      message: "Enter a shape color (keyword or hexadecimal):",
    },
  ])
  .then((answers) => {
    // Do something with the answers...
  })
  .catch((error) => {
    error.isTtyError
      ? console.error("Couldn't be rendered in the current environment")
      : console.error("Something else went wrong...", error);
  });

function writeToFile(reponses) {
  fs.writeFile("./output/responses.json", JSON.stringify(reponses), (err) => {
    err ? console.error("err") : console.log("Generated responses.json");
  });
}
