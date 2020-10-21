const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee")
let teamMember = [];
let idArr = [];

// here the user choose the title which satisfies and runs the selected function
function menu() {
    function chooseTitle() {
        inquirer
            .prompt({
                type: "list",
                message: "Please select a title?",
                name: "title",
                choices: ["manager", "engineer", "intern", "done"]
            })
            .then(response => {
                switch (response.title) {
                    case "manager":
                        mangerQuestions()
                        break;

                    case "engineer":
                        engineerQuestions()
                        break;

                    case "intern":
                        internQuestions()
                        break;

                    case "done":
                        buildHtml()
                        break;

                }

            })

    }

// this function is called when the user in done
    function buildHtml(){
        if(!fs.existsSync(OUTPUT_DIR)){
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMember), "utf-8")
    }

    //  if user selects manager this function is called upon
    function mangerQuestions() {
        inquirer.prompt(
            [
                {
                    type: "input",
                    message: "whats your name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Enter your email address?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Enter the office number?",
                    name: "officenum"
                },
                {
                    type: "input",
                    message: "Enter your id?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Enter your github username",
                    name: "github"
                }
            ]
        )
            .then(response => {
                console.log(response);
                const manager = new Manager(response.name, response.email, response.id, response.officenum);
                teamMember.push(manager);

                chooseTitle();
            })
    }


// this function is called upon when user selects the title as engineer
    function engineerQuestions() {
        inquirer.prompt([
                {
                  type: "input",
                  message: "whats your name?",
                  name: "name"
                },
                {
                  type: "input",
                  message: "Enter your email address?",
                  name: "email"
                },
                {
                  type: "input",
                  message: "Enter the employee id?",
                  name: "id"
                },
                {
                  type: "input",
                  message: "Enter your github username",
                  name: "github"
                }
              ])
            .then(response => {
                console.log(response);
                const engineer = new Engineer(response.name, response.email, response.id, response.github);
                teamMember.push(engineer);

                chooseTitle();
            })
    }


    function internQuestions() {
        inquirer.prompt( 
            [
                {
                  type: "input",
                  message: "whats your name?",
                  name: "name"
                },
                {
                  type: "input",
                  message: "Enter your email address?",
                  name: "email"
                },
                {
                    type: "input",
                    message: "Enter your id??",
                    name: "eid"
                  },
                
                {
                  type: "input",
                  message: "Enter your school name?",
                  name: "school"
                }
              ]
              )
            .then(response => {
                console.log(response);
                const engineer = new Intern(response.name, response.email, response.id, response.schoolName);
                teamMember.push(engineer);

                chooseTitle();
            })
    }
    chooseTitle();
}
menu();