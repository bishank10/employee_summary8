// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
    

  class Intern extends Employee{
    constructor(name, email, id, schoolName){
    super(name,email,id);
      this.schoolName = schoolName;
      }
      getRole = () => "Manager";
      getSchoolName = () => this.schoolName;
      getRole = () => "intern";
}

  
  module.exports = Intern;