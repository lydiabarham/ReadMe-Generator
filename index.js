const fs = require("fs");
//const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions for your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: "Enter your project's usage information",
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide contribution guidelines for your project',
    },
    {
      type: 'input',
      name: 'test',
      message: "Enter your project's test instructions",
    },
  ]);
};

promptUser()
  .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));

