//require Employee
const Employee = require('./employee')

//an extension of the Employee class. 
class Engineer extends Employee {
//should contain name, id, email, githuburl
    constructor(name, id, email, github) {
        //name, id, email all inherited from parent
        super(name,id,email);
        //githuburl created on class
        this.github = github
    }
    //has property method getGithub() to return the github 
    getGithub() {
        return this.github;
    }
    //getRole() shoudl return engineer
    getRole() {
        return 'Engineer'
    }
}


