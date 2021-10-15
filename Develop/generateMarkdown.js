// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return 'https://img.shields.io/apm/l/PACK?style=plastic';

    case 'Apache License 2.0':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';

    case 'BSD 2-Clause "Simplified" License':
      return 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg';

    case 'BSD 3-Clause "New" or "Revised" License':
      return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';

    case 'Mozilla Public License 2.0':
      return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';

    case 'Creative Commons Zero v1.0 Universal':
      return 'https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg';
  }
}

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT License':
        return 'https://opensource.org/licenses/MIT';

      case 'Apache License 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';

      case 'BSD 2-Clause "Simplified" License':
        return "https://opensource.org/licenses/BSD-2-Clause";

      case 'BSD 3-Clause "New" or "Revised" License':
        return 'https://opensource.org/licenses/BSD-3-Clause';

      case 'Mozilla Public License 2.0':
        return 'https://opensource.org/licenses/MPL-2.0';

      case 'Creative Commons Zero v1.0 Universal':
        return 'http://creativecommons.org/publicdomain/zero/1.0/';
    }
  }


  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    switch (license) {
      case 'MIT License':
        return 'This repository is covered under the MIT License';
  
      case 'Apache License 2.0':
        return 'This repository is covered under the Apache License 2.0';
  
      case 'BSD 2-Clause "Simplified" License':
        return 'This repository is covered under the BSD 2-Clause "Simplified" License';
  
      case 'BSD 3-Clause "New" or "Revised" License':
        return 'This repository is covered under the BSD 3-Clause "New" or "Revised" License';
  
      case 'Mozilla Public License 2.0':
        return 'This repository is covered under the Mozilla Public License 2.0';
  
      case 'Creative Commons Zero v1.0 Universal':
        return 'This repository is covered under the Creative Commons Zero v1.0 Universal';
    }
  }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    renderLicenseBadge(data.license);
    renderLicenseLink(data.license);
    renderLicenseSection(data.license);
    let badge = renderLicenseBadge(data.license)
    let link = renderLicenseLink(data.license);
    let section = renderLicenseSection(data.license);
    
    return `
  # ${data.title}
  
  
  ![License](${badge})


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
  ${section} <br>
  ***${link}***
 

  ## Contributions
  ${data.contributors}

  ## Test
  ${data.tests}
  
  ## Questions
  If you have any questions or suggestions please reach out to me via email ${data.questions} 
`;
  }

  module.exports = generateMarkdown;