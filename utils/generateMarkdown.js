// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
      break;
    case 'Apache License 2.0':
      return '![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
      break;
    case 'GNU General Public License v3.0 (GPL-3.0)':
      return '![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)'
      break;
    case 'BSD 2-Clause "Simplified" License':
      return '![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)'
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      return '![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
      break;
    case 'Creative Commons Zero v1.0 Universal (CC0 1.0)':
      return '![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)'
      break;
    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
      break;
    default:
      return " "
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return "[MIT License](https://opensource.org/license/MIT)"
      break;
    case 'Apache License 2.0':
      return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)'
      break;
    case 'GNU General Public License v3.0 (GPL-3.0)':
      return '[GNU General Public License v3.0 (GPL-3.0)](https://www.gnu.org/licenses/gpl-3.0.html)'
      break;
    case 'BSD 2-Clause "Simplified" License':
      return '[BSD 2-Clause "Simplified" License](https://opensource.org/license/BSD-2-Clause)'
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      return '[BSD 3-Clause "New" or "Revised" License](https://opensource.org/license/BSD-3-Clause)'
      break;
    case 'Creative Commons Zero v1.0 Universal (CC0 1.0)':
      return '[Creative Commons Zero v1.0 Universal (CC0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/)'
      break;
    case 'The Unlicense':
      return '[The Unlicense](https://unlicense.org/)'
      break;
    default:
      return ""
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateMarkdown(data) {
  let license = data.license
  let licenseBadge = renderLicenseBadge(license)
  console.log(licenseBadge)
  let licenseLink = renderLicenseLink(license)
  let licenseSection = renderLicenseSection(license)
  return `# ${data.title}

  ${licenseBadge}

## Description

${data.desciption}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Contributing

${data.contributing}

${licenseSection}

${licenseLink}

---

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Tests

${data.tests}
`
}

module.exports = generateMarkdown;