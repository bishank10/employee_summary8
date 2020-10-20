// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function internGenerator(){
    const inquirer = require("inquirer")
    const intern = [
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
      message: "Enter your school name?",
      name: "school"
    }
  ]

  function Intern (name, email,id, school){
      this.name =name;
      this.email = email ;
      this.id = id;
      this.school = school;
      this.getName = () => this.name;
      this.getEmail = () => this.email;
      this.getId = () => this.id;
      this.getSchool = () => this.school;
      this.getRole = () => "Intern";

  }

  inquirer.prompt(intern)
  .then(function(response){
    const intern1 = new Intern(response.name, response.email, response.id, response.github);
  })}
  
  module.exports = internGenerator;