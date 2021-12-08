//require the employee class
const Employee = require('./employee')

//an extension of the Employee class. 
class Manager extends Employee {
//should contain name, id, email, officeNumber
    constructor(name, id, email, officeNumber) {
        //name, id, email all inherited from parent
        super(name,id,email);
        //officeNumber created on class
        this.officeNumber = officeNumber;
    }
    //getRole() shoudl return manager
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;