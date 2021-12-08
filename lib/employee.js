//employee class is the parent class 
class Employee {
    //constructor to create the name, id, and email properties
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    } 
    
    //each method, getName(), getID(), getEmail() and getRoel(){} should be included as well
    getName() {
        return this.name;
    }

    getID() {
        return this.id
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;