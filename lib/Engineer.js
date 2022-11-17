const Employee = require('./Employee');

class Engineer extends Employee {
    constructor({ name, id, email, github }) {
        super({ name: name, id: id, email: email });
        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
