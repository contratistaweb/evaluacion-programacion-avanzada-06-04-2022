const inquirer = require('inquirer');
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What's your full name",
    }, {
        type: 'input',
        name: 'cellphone',
        message: "What's your cellphone number",
    }, {
        type: 'input',
        name: 'address',
        message: "What's your address",
    }
]).then(answers => console.log(answers));