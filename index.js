const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short description of your project.",
  },
  {
    type: "checkbox",
    name: "tableOfContents",
    message: "Select the sections you would like to include in your Table of Contents.",
    choices: [
      "Description",
      "Installation",
      "Usage",
      "License",
      "Contributing",
      "Tests",
      "Questions",
    ],
    default: ["Description", "Installation", "Usage", "License"],
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use for your project?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What are your guidelines for contributing to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions for your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];


function writeToFile(fileName, data) {
  const timestamp = Date.now(); // Get the current timestamp
  const uniqueFileName = `README_${timestamp}.md`; // Append timestamp to the filename

  fs.writeFile(`./docs/${uniqueFileName}`, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`${uniqueFileName} file created successfully!`);
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
  });
}


init();
