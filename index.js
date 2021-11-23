//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// read me questions--user input
const questions = () =>
    inquirer.prompt([{
            type: 'input',
            message: 'Project Title',
            name: 'title'
                //     validate: (value) => {
                //         if (value) {
                //             return true
                //         } else {
                //             return 'i need a value to continue'
                //         }
                //     },
                // },
                // {
                //     type: "input",
                //     message: "Table of Contents",
                //     name: "contents",
                //     // validate: (value) => {
                //     //     if (value) {
                //     //         return true
                //     //     } else {
                //     //         return 'i need a value to continue'
                //     //     }
                //     },
        },
        {
            type: 'input',
            message: 'Description',
            name: 'info'
                // validate: (value) => {
                //     if (value) {
                //         return true
                //     } else {
                //         return 'i need a value to continue'
                // }
                // },
        },
        {
            type: 'input',
            message: 'Installation Instructions',
            name: 'install'
                // validate: (value) => {
                //     if (value) {
                //         return true
                //     } else {
                //         return 'i need a value to continue'
                //     }
                // },
        },
        {
            type: 'input',
            message: 'Usage Information',
            name: 'usage'
                // validate: (value) => {
                //     if (value) {
                //         return true
                //     } else {
                //         return 'i need a value to continue'
                //     }
                // },
        },
        {
            //small list of licenses
            type: 'list',
            message: 'License: Choose from the following: ',
            name: 'license',
            choices: ['apache-2.0', 'The MIT License', 'GNU license', 'The Unlicense', 'N/A']
                // validate: (value) => {
                //     if (value) {
                //         return true
                //     } else {
                //         return 'i need a value to continue'
                //     }
                // },
        },
        {
            type: 'input',
            message: 'Author/ Contributors',
            name: 'contributions'
                // validate: (value) => {
                //     if (value) {
                //         return true
                //     } else {
                //         return 'i need a value to continue'
                //     }
                // },
        },
        {
            type: 'input',
            message: 'Tests',
            name: 'check'
                // validate: (value) => {
                //     if (value) {
                //         return true
                //     } else {
                //         return 'i need a value to continue'
                //     }
                // },
        },

        function generateMD(data) {
            return `# ${data.title}
    $(badge)
    ${data.description}
    ## Table of Contents:
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Tests],(#tests)
    * [Questions](#questions)
    ### Installation:
    To get the correct dependencies, open the console and run the following: 
    \`\`\`${data.installations}\`\`\`
    ### Usage:
    ${data.usage}
    ### License:
    Licensed by: ${data.license}
    ### Contributing:
    ${(data.contribute, data.author)}
    ### Tests:
    To test, open console and run the following:
    \`\`\`${data.tests}\`\`\`
    ### Questions:
    Having trouble? Feel free to contact me, ${data.author} via ${data.email}
    or if you're just feeling the need see my other projects 
    I have on my Github, simply click here:(https://github.com/${data.username}
    `;
        },

        questions()
        .then((data) => writeFileAsync('generatedREADME.md', generateMD(data)))
        .then(() => console.log('README.md has been successfully generated!'))
        .catcher((err) => console.error(err))
    ]);