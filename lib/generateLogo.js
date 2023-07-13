const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./shapes');

class GenerateLogo {
    constructor() {
      this.text = "";
      this.textColor = "";
      this.shapeType = "";
      this.shapeColor = "";
    }
  
    async getUserInput() {
      const questions = [
        {
            name: "shapeType",
            type: "list",
            message: "Please select a shape for the logo: ",
            choices: ['square', 'circle', 'triangle']
        },
        {
            name: "shapeColor",
            type: "input",
            message: "Please select a shape color: ",
        },
        {
          name: "text",
          type: "input",
          message: "Please enter the text for the logo (maximum of 3 characters): ",
          validate: (text) => text.length <= 3 || "The message must not contain more than 3 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Please enter a color for the logo's text: "
        }
      ];
  
      const answers = await inquirer.prompt(questions);
      this.text = answers.text;
      this.textColor = answers.textColor;
      this.shapeType = answers.shapeType;
      this.shapeColor = answers.shapeColor;
    }
  
    createShape() {
      switch (this.shapeType) {
        case "circle":
          return new Circle();
        case "square":
          return new Square();
        default:
          return new Triangle();
      }
    }
}

module.exports = GenerateLogo;