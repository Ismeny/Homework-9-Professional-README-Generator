// TInclude packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown1 = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a brief description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please explain how to install your project:',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Please explain how to use your project:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please list any frameworks used and / or anyone you would like to credit',
        name: 'credits',
      },
      {
        type: 'list',
        message: 'Please choose your license',
        choices: [
            'Apache License 2.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Creative Commons Zero v1.0 Universal',
            'Mozilla Public License 2.0',
        ],
        name: 'license',
      },
      {
        type: 'input',
        message: 'Please list any contributors',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'Please list any test instructions for your project',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Please enter email address where you can be contacted for any questions regarding your project',
        name: 'questions',
      },
  ]
  )
 
  .then((data) => {
    console.log(data);
    // console.log(data.title);
    // console.log(data.description);
    // console.log(data.installation);
    // console.log(data.usage);
    // console.log(data.credits)
    // console.log(data.license);
    // console.log(data.contributors);
    // console.log(data.tests);
    // console.log(data.questions);
    let generateMarkdown = generateMarkdown1(data)
    writeToFile(generateMarkdown)
  })
]
;


// TODO: Create a function to write README file
function writeToFile(generateMarkdown) {
  fs.writeFile("README.md", generateMarkdown, (err) =>
      err ? console.log(err) : console.log('Congratulations! You have succesfully created a README.md for your project!')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


