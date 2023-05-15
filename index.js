// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
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


// TODO: Create a function to write README file


// TODO: Create a function to initialize app


// Function call to initialize app
init();
