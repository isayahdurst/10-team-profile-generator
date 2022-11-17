const Employee = require('./Employee');

class Intern extends Employee {
    constructor({ name, id, email, school }) {
        super({ name: name, id: id, email: email, school: school });
        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
