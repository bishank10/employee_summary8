// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function managerGenerator(){
    const inquirer = require("inquirer")
    const manager = [
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

  function Manager(name, email, officenum , id, github){
      this.name =name;
      this.email = email ;
      this.office = officenum;
      this.id = id;
      this.github = github;
      this.getName = () => this.name;
      this.getEmail = () => this.email;
      this.getId = () => this.id;
      this.getOffice = () => this.office;
      this.getRole = () => "Manager";
  }

  inquirer.prompt(manager)
  .then(function(response){
    const manager1 = new Manager(response.name, response.email, response.officenum, response.id, response.github);
  })}
  
  module.exports = managerGenerator;