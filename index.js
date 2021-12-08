//require inquirer, file system
const fs = require('fs');
const inquirer = require('inquirer')
//require the html generator
const generateHTML = require('./src/generateHTML')
//require classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')

//create empty array for the team 
const team = [];

//prompt for employee
const employeeQuestions = [{
    type: 'input',
    name: 'name',
    message: "What is the employee's name?",
    //potentially add validation if time 
},
{
    type: 'input',
    name: 'id',
    message: "What is the employee's ID?"
},
{
    type: 'input',
    name: 'email',
    message: "What is the employee's email address?"
}
]
//prompt for manager
const managerQuestions = [{
    type: 'input',
    name: 'officeNumber',
    message: "What is the manager's office number? Example: (123)-456-7890"
}
]
//prompt for engineer
const engineerQuestion = [{
    type: 'input',
    name: 'github',
    message: "What is the engineer's github username?"
}
]
//prompt for intern
const internQuestion = [{
    type: 'input',
    name: 'school',
    message: 'What school does the intern attend?'
}
]

//prompt what employee role to add next
const nextEmployeeRole = [{
    type: 'list',
    name: 'role',
    message: 'Please select the role you would like to add next.',
    choices: [
        'Engineer',
        'Intern',
        "That's everyone!"
    ]
}
]
//initialize function (which should begin with a new Manager variable being added to an array so there is a list of memebrs)

//a function that determines what type of employee should be added next > use switch statement that results in fucntions being called
//type of employee should be prompted in the employee questions

//related to function above have an add employee fucntion for each employee type (engineer, intern)

//write to File function takes in the response data, generateHTML using the passed in data and writes the html to the index.html file