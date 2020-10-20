// TODO: Write code to define and export the Employee class
function employeeGenerator(){
  const inquirer = require("inquirer")
  const employee = [
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

  function Employee(name, email, id, github){
      this.name =name;
      this.email = email ;
      this.id = id;
      this.github = github;
  }

  inquirer.prompt(employee)
  .then(function(response){
    const employee1 = new Employee(response.name, response.email, response.id, response.github);
  })}
  
  module.exports = employeeGenerator;