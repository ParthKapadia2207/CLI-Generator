// Including the required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown').default

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your Repository?',
       
    },
    {
        type: 'input',
        name: 'desciption',
        message: 'Enter your Project Description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are  there any installation instructions or dependency  of your reposiotory  that developer should know about?',
       
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give explaination on how this project is used.',
    },
    {
        type: 'input',
        name: 'teams',
        message: 'Who are your team member to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any test cases for this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
          'MIT License',
          'Apache License 2.0',
          'GNU General Public License v3.0 (GPL-3.0)',
          'BSD 2-Clause "Simplified" License',
          'BSD 3-Clause "New" or "Revised" License',
          'Creative Commons Zero v1.0 Universal (CC0 1.0)',
          'The Unlicense',
          'No License'
        ]
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can people contribute to this project?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name ?',
    },
    {
        type: 'input',
        name: 'githubusername',
        message: 'What is Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },   
    {
        type: 'input',
        name: 'linkedinusername',
        message: 'What is your Linkedin user name?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let markdown = generateMarkdown(data)
    fs.writeFile(fileName, markdown, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Registered Sucessfully your  README.md is created' );
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers)
    })
    .catch((error) => {
        console.error('Error occurred:', error);
      });
}

// Function call to initialize app
init();