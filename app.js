const inquirer = require('inquirer');
// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: "What's your full name",
//     }, {
//         type: 'input',
//         name: 'cellphone',
//         message: "What's your cellphone number",
//     }, {
//         type: 'input',
//         name: 'address',
//         message: "What's your address",
//     }
// ]).then(answers => console.log(answers));

inquirer
    .prompt([
        {
            type: 'list',
            name: 'favorite_color',
            message: 'What is your favorite color?',
            choices: ['Yellow', 'Blue', 'Red', 'White', 'Black'],
        },
    ])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    });