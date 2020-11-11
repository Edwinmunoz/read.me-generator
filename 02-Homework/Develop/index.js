console.log("hello");

const fs = require ("fs");
const inquirer = require("inquirer");

const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user

const questions = [
{
    type: "input",
    name: "title",
    messege: "what is the title"
},
{
    type: "input",
    name:"Description",
    messege: "describe the assignment"
},
{
    type:"input",
    name:"license",
    messege:"license?"
},
{
    type:"input",
    name:"github",
    messege:"github username",
}


];

// function to write README file
    inquirer
    .prompt(questions)
    .then(function(data){
                
          fs.writeFile("readme.md", generateMarkdown(data),(err) => {
            if (err) {
              throw err;
            };
    
            console.log("New README file created with success!");
          });
        });


//function to initialize program
function init() {

    
    }

//function call to initialize program
init();