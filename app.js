const inquirer = require('inquirer');
/*
    form inquirer
    input fields are added that request personal information of a person,
    it is built by adding an input type for each question to capture the answer in an object.
 */
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


/*
    list inquirer
    inquirer lists are built by selecting the type 'lists'
    and adding an array of options to the choices attribute.
 */
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

/*
     various types of questions
     Inquirer has different types or ways of displaying information.
 */
const expandQuestion = () => {
    return inquirer
        .prompt(
            [
                {
                    type: 'expand',
                    name: 'favorite_food',
                    message: 'What is your favorite food?',
                    choices: [
                        {
                            key: 'a',
                            name: 'Pizza',
                            value: 'pizza',
                        },
                        {
                            key: 'b',
                            name: 'Hamburg',
                            value: 'hamburg',
                        },
                        {
                            key: 'c',
                            name: 'Hot dog',
                            value: 'hot-dog',
                        },
                    ],
                }
            ]
        )
}

const checkBoxQuestion = () => {
    return inquirer
        .prompt(
            [
                {
                    type: 'checkbox',
                    name: 'favorite_food',
                    message: 'What is your favorite food?',
                    choices: [
                        {name: 'Pizza'},
                        {name: 'Hamburg'},
                        {name: 'Hot dog'}
                    ],
                }
            ]
        )
}

const rawListQuestion = () => {
    return inquirer
        .prompt([
            {
                type: 'checkbox',
                name: 'favorite_food',
                message: 'What is your favorite food?',
                choices: ['Pizza', 'Hamburg', 'Hot dog'],
            }, {
                type: 'rawList',
                name: 'favorite_food',
                message: 'What is your favorite food?',
                // choices: ['Pizza', 'Hamburg', 'Hot dog', 'sushi', 'Ramen'],
            },
        ])
}

const numberQuestion = () => {
    return inquirer
        .prompt([
            {
                type: 'number',
                name: 'favorite_food',
                message: 'What is your favorite food?',
                choices: ['Pizza', 'Hamburg', 'Hot dog'],
            }
        ])
}

const listQuestion = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'favorite_food',
                message: 'What is your favorite food?',
                choices: ['Pizza', 'Hamburg', 'Hot dog'],
            }
        ])
}

expandQuestion()
.then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});
checkBoxQuestion()
    .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    });

rawListQuestion()
    .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    });

numberQuestion()
    .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    });

listQuestion()
    .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    });

expandQuestion().finally()
checkBoxQuestion().finally()
rawListQuestion().finally()
listQuestion().finally()

/*
    open editor with Inquirer
    Inquirer allows to open an editor to manage information or data in a file,
    it is only necessary to specify in the 'type' attribute as value 'editor'
 */

const openEditor = () => {
    return  inquirer.prompt([
        {
            type: 'editor',
            name: 'bio',
            message: 'Please write a short bio of at least 3 lines.',
            validate(text) {
                if (text.split('\n').length < 3) {
                    return 'Must be at least 3 lines.';
                }

                return true;
            },
        }
    ])
}

openEditor().then().finally()
