//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// read me questions--user input
const questions = [
    {
        type: "input",
        message: "Title of Your Repository",
        name: "title"
    },
    {
        type: "input",
        message: "Description",
        name: "info"
    },
    {
        type: "input",
        message: "Table of Contents",
        name: "contents"
    },
    {
        type: "input",
        message: "Installation Instructions",
        name: "install"
    },
    {
        type: "input",
        message: "Usage Information",
        name: "usage"
    },
    {
        type: "input",
        message: "License",
        name: "Choose from the following: ",
        choices: [
            "apache-2.0",
            " ",
            " ",
            " ",
            " ",
        ]
    },
    {
        type: "input",
        message: "Author/ Contributors",
        name: "writer(s)"
    },
    {
        type: "input",
        message: "Tests",
        name: "check"
    }
],

    //function to write README file
function writeToFile(file, data) {
    fs.writeToFile(file, function (err) {
        if (err) throw console.error(console.log("pass"));
    });

    // TODO: Create a function to initialize app
    function init() { }

    // Function call to initialize app
    init();
    fs.appendFileSync('app.js')
}