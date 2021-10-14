// TInclude packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
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
  ])
 
  .then((data) => {
    console.log(data);
    console.log(data.title);
    console.log(data.description);
    console.log(data.installation);
    console.log(data.usage);
    console.log(data.credits)
    console.log(data.license);
    console.log(data.contributors);
    console.log(data.tests);
    console.log(data.questions);
  
    fs.writeFile("README.md", generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Congratulations! You have succesfully created a README.md for your project!')
    );
  })
];

function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Contributions
  ${data.contributors}

  ## Test
  ${data.tests}

  ## Questions
  If you have any questions or suggestions please reach out to me via email ${data.questions} 
`;
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


