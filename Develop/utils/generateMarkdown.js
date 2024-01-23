function renderLicenseBadge(license) {
  if (license !== "None") {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
  } return ""
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  } return ""
}

function renderLicenseSection(license) {
  if (license !== "None")
  return ` ## License\n This project is licensed under the ${license} license.`
}

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
