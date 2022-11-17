const Employee = require('./Employee');

class Manager extends Employee {
    constructor({ name, id, email, officeNumber }) {
        super({ name: name, id: id, email: email });
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
}

module.exports = Manager;
