//require employee class
const Employee = require('./employee')

//an extension of the employee class. 
class Intern extends Employee {
    //should contain name, id, email, school
    constructor(name, id, email, school) {
        //name, id, email all inherited from parent
        super(name,id,email);
        //school created on class
        this.school = school
    }
    //has property method getSchool()
    getSchool() {
        return this.school;
    }
    //getRole() shoudl return intern
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;