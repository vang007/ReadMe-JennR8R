const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// questions array accessed with inquirer
const questions = [{
        type: 'input',
        name: 'title',
        message: 'Title of your project',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick the license that is associated with your project.',
        choices: ['Apache 2.0', 'MIT', 'GPL v3.0', 'MPL-2.0'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select one of the four options')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a minor description of what this app does.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Include a short description of the app.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install the app?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Installation steps');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide a use for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'The appropriate procedures to contributing towards this app.',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('How to contribute your ideas and/or fixes?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Testing precedure');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'askMe',
        message: 'Provide your Github username for contacting you regarding questions and other concerns.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please provide your username so others can reach out to you with questions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email as a secondary way to contact you.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Provide email');
                return false;
            }
        }
    }
];




// function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
            var fileContent = generateMarkdown(answer);
            writeToFile(fileContent)
        });
}

// Function call to initialize app
init();

// exports
module.exports = questions;