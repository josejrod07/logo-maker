const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./shapes');
const SVG = require('./svg');
const fs = require('fs');

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

    async generateLogo() {
        try {
          await this.getUserInput();
          const shape = this.createShape();
          shape.setColor(this.shapeColor);
          
          const svg = new SVG();
          svg.setShape(shape);
          svg.setText(this.text, this.textColor);
          
          await fs.writeFile('logo.svg', svg.render(), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = GenerateLogo;