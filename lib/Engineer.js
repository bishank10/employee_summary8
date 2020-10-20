// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function engineerGenerator(){
    const inquirer = require("inquirer")
const engineer = [
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
  ]

  function Engineer(name, email, id, github){
      this.name =name;
      this.email = email ;
      this.id = id;
      this.github = github;
      this.getName = () => this.name;
      this.getEmail = () => this.email;
      this.getId = () => this.id;
      this.getGithub = () => this.github;
      this.getRole = () => "Engineer";
  }

  inquirer.prompt(Engineer)
  .then(function(response){
    const Engineer1 = new Engineer(response.name, response.email, response.id, response.github);
  })}
  
  module.exports = engineerGenerator;