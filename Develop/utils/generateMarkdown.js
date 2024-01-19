// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
  } return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return ` - [License](#license)`
  } return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None")
  return ` ## License\n This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.desc}

## Table of Contents  
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
If you have any questions, you can email me at ${data.email}
If you want to see more of my work, please visit my github at [${data.github}](http://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
