// // function to read user license answer
// let licenseIcon = () => {
//     switch(data.license) {
//     case 'The MIT License':
//         return 'The MIT License'
//     case 'Apache 2.0 License':
//         return 'Apache 2.0 License'
//     case  'ISC License (ISC)':
//         return 'ISC License (ISC)';
//     case  'BSD 3-Clause License':
//         return 'BSD 3-Clause License';
//     case 'BSD 2-Clause License':
//         return 'BSD 2-Clause License';
//     case 'CC0':
//         return 'CC0';
//     case 'GNU GPL v3':
//         return 'GNU GPL v3';
//     case 'Eclipse Public License 1.0':
//         return 'Eclipse Public License 1.0';
//     case 'Mozilla Public License 2.0':
//         return 'Mozilla Public License 2.0';
//     case 'no license': 
//         return 'no license';
//     default: 
//         return 'error';
//   };
// };

const displayLicenseIcon = (licenseAnswer) => {
    return licenseAnswer === 'The MIT License'? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)':
    licenseAnswer === 'Apache 2.0 License'? '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)':
    licenseAnswer === 'ISC License (ISC)'? '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)':
    licenseAnswer === 'BSD 3-Clause License'? '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)':
    licenseAnswer === 'BSD 2-Clause License'? '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)':
    licenseAnswer === 'CC0'? '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)':
    licenseAnswer === 'GNU GPL v3'? '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)':
    licenseAnswer === 'Eclipse Public License 1.0'? '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)':
    licenseAnswer === 'Mozilla Public License 2.0'? '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)':
    licenseAnswer === 'no license'? '':
    console.error(err);
} 

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ${displayLicenseIcon(data.license)}
  
    ## Description
    ${data.description}

    ## Table of Contents

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contributing
    ${data.contribution}

    ## Tests
    ${data.test}

    ## Questions

  `;
  }

  module.exports = generateMarkdown;



