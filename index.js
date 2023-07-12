const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: "Please select a shape for the logo: ",
        choices: ['square', 'circle', 'triangle']
    },
    {
        type: 'input',
        name: 'color',
        message: "Please enter a color for the logo's text: "
    },
    {
        type: 'input',
        name: 'text',
        message: "Please enter the text for the logo (maximum of 3 characters): "
    }
];

function inquireFunction() {
    inquirer.prompt(questions)
        .then((res) => {
            console.log(res);
        });
}

inquireFunction();