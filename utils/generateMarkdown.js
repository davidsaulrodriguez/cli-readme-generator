// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadges(username, repoName) {
  return (`<span align="center">

![](https://img.shields.io/github/issues/${username}/${repoName})
![](https://img.shields.io/github/forks/${username}/${repoName})
![](https://img.shields.io/github/stars/${username}/${repoName})
![](https://img.shields.io/github/license/${username}/${repoName})

</span>
  `)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'BSD-2-Clause':
      return `https://choosealicense.com/licenses/bsd-2-clause/`;
      break;
    case 'GPLv2':
      return `https://choosealicense.com/licenses/gpl-2.0/`;
      break;
    case 'GPLv3':
      return `https://choosealicense.com/licenses/gpl-3.0/`;
      break;
    case 'MIT':
      return `https://choosealicense.com/licenses/mit/`;
      break;
    default:
      return ``;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown() {}

module.exports = generateMarkdown;