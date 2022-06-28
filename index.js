// Dependencies
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'index.html');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const employeeArray = [];


    function addTeam () {
        inquirer.prompt([{
            type: 'list',
            message: 'What type of employee are you adding to the team?',
            name: 'addEmployeeData',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit']
        }])
        // Fixed issue here with missing parentheses causing error with arrow keys in terminal
        .then((userData) => {
            switch(userData.addEmployeeData) {
                case 'Manager': addManager();
                break;
                case 'Engineer': addEngineer();
                break;
                case 'Intern': addIntern();
                break;

                default: builtTeam();
            }
        })
    }


const addManager = () => {
    inquirer.prompt([{
            type: 'input',
            name: 'managerName',
            message: 'Whats the managers name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Whats the managers ID number?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Whats the managers email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Whats the managers office number?'
        }

    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        employeeArray.push(manager);
        addTeam();
    });
};

const addEngineer = () => {
    inquirer.prompt([{
            type: 'input',
            name: 'engineerName',
            message: 'Whats the engineers name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Whats the engineers ID number?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Whats the engineers email?'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Whats the engineers github username?'
        }
    ])
    .then(answers => {
        const enigneer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.gitHub);
        employeeArray.push(enigneer);
        addTeam();
    });
};

const addIntern = () => {
        inquirer.prompt([{
            type: 'input',
            name: 'internName',
            message: 'Whats the interns name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Whats the interns ID number?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Whats the interns email?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Which school does the intern attend?'
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        employeeArray.push(intern);
        addTeam();
    });
};

const builtTeam = () => {
    console.log('Team Created');
    fs.writeFileSync(outputPath, generateHTML(employeeArray), 'utf-8')
};
// Removed access unneeded function to make it cleaner
addTeam();