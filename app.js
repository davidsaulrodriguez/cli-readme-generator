const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'GitHub username'
  },
  {
    type: 'input',
    name: 'emailAddr',
    message: 'What is your email address?',
    validate: function(email)
    {
      return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
    }
  },
  {
    type: 'input',
    name: 'repoName',
    message: 'GitHub repo name?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'Project name?'
  },
  {
    type: 'input',
    name: 'description',
    message: "Project description"
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions'
  },
  {
    type: "input",
    name: 'usage',
    message: 'Usage commands / instructions'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test commands / instructions'
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Contribution instructions'
  },
  {
    type: 'list',
    name: 'license',
    message: 'License type',
    choices: ['BSD-2-Clause', 'GPLv2', 'GPLv3', 'MIT', 'null']
  }
];

function writeReadMe (filename, data) {
  fs.writeFile(filename, data, function(error) {
    if (error) return console.log(error);
    console.log(`${filename} has been created!`);
  })
}

const promptUser = () => {
  return inquirer.prompt(questions)
}

const init = async () => {
  try {
    const answers = await promptUser()
    .then(function (response) {
      const data = generateMarkdown(response)
      writeReadMe("README.md", data)
    })
  } catch (error) {
    console.log(error);
  } 
}

init();