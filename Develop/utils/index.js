const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./generateMarkdown.js")

const questions = [
    {type:"input", name:"title", message:"What is the title of your project?"}, 
    {
        type:"input", name:"desc", message:"Please provide a short description of your project"
    },
    {
        type:"input", name:"install", message:"Please provide instruction for installation"
    },
    {
        type:"input", name:"usage", message:"Please provide usage instruction for the project"
    },
    {
        type:"list", name:"license", message:"Please choose the liscence for the project", choices:["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type:"input", name:"contribution", message:"Please provide instructions for contribiting the project if open source"
    },
    {
        type:"input", name:"tests", message:"Please provide instructions for testing the project"
    },
    {
        type:"input", name:"email", message:"Please provide your email"
    },
    {
        type:"input", name:"github", message:"Please provide your Github username"
    },

];

function init() {
    inquirer.prompt(questions).then(answers => {
        fs.writeFile("README.md", generateMarkdown(answers),err => {
            if (err) {
                console.log(err.message)
            } else {
                console.log("Nice, file created")
            }
        })
    }) 
}
init();
