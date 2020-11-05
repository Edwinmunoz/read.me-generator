console.log("hello");
const fs = require ("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
{type: "input",
name: "title",
messege: "what is the tile"
},

];

// function to write README file
//function writeToFile(fileName, data) {}

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();

inquirer
.prompt (questions).then(response => {

fs.appendFileSync("READMEGEN.md", ("#"+ Response.title)+ "\n",
//(err) =>err ? console.error(err) : console.log('Commit logged!')
function(err) {
    if (err){
        return console.log(err);
    }console.log('Commit logged!')
});

});