const inquirer = require('inquirer');
const chalk = require('chalk');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.teamMembers = [];
    }

    async addEmployee({ role }) {
        const response = await inquirer.prompt([
            {
                type: 'input',
                message: `What is the ${role}'s name?`,
                name: 'name',
            },
            {
                type: 'input',
                message: 'Enter their employee ID:',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Enter their email address:',
                name: 'email',
            },
        ]);

        return response;
    }

    async addManager() {
        console.log(chalk.red('Manager Information:'));

        const { name, id, email } = await this.addEmployee({ role: 'Manager' }); // Prompts the user for standard info shared by all employee types.

        const { officeNumber } = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is their office number?',
                name: 'officeNumber',
            },
        ]);

        console.clear();

        if (await this.confirmEmployee({ name, id, email, officeNumber })) {
            this.teamMembers.push(
                new Manager({
                    name: name,
                    id: id,
                    email: email,
                    officeNumber: officeNumber,
                })
            );
            console.log(chalk.blue('Employee Has been added!'));
        } else {
            console.log(chalk.blue('Try again'));
            await this.addManager();
        }
    }

    async addEngineer() {
        const { name, id, email } = await this.addEmployee({
            role: 'Engineer',
        });
        const { github } = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is their GitHub username?',
                name: 'github',
            },
        ]);

        console.clear();

        if (await this.confirmEmployee({ name, id, email, github })) {
            this.teamMembers.push(
                new Engineer({
                    name: name,
                    id: id,
                    email: email,
                    github: github,
                })
            );
            console.log(chalk.blue('Employee Has been added!'));
        } else {
            console.log(chalk.blue('Try again'));
            await this.addEngineer();
        }
    }

    async addIntern() {
        const { name, id, email } = await this.addEmployee({ role: 'Intern' });
        const { school } = await inquirer.prompt([
            {
                type: 'input',
                message: 'What school are they from?',
                name: 'school',
            },
        ]);

        console.clear();

        if (
            await this.confirmEmployee({
                name: name,
                id: id,
                email: email,
                school: school,
            })
        ) {
            this.teamMembers.push(
                new Intern({
                    name: name,
                    id: id,
                    email: email,
                    school: school,
                })
            );
            console.log(chalk.blue('Employee has been added!'));
        } else {
            console.log(chalk.blue('Try again!'));
            await this.addIntern();
        }
    }

    async createTeam() {
        await this.addManager();
        await this.addMembers();
    }

    async addMembers() {
        console.clear();
        const { role } = await inquirer.prompt([
            {
                type: 'list',
                message: 'Which member would you like to add next?',
                name: 'role',
                choices: ['Engineer', 'Intern', 'None'],
            },
        ]);

        if (role === 'Engineer') {
            await this.addEngineer();
            await this.addMembers();
        } else if (role === 'Intern') {
            await this.addIntern();
            await this.addMembers();
        } else {
            if (this.teamMembers.length > 0) {
                console.log('Your new team looks like:');
                for (const member of this.teamMembers) {
                    console.log(`${member.name} - ${member.role}`);
                }
            }
        }
    }

    async confirmEmployee({ name, id, email, officeNumber, github, school }) {
        console.log(
            `You have added: 
        Name: ${name},
        Employee ID: ${id},
        Email: ${email},
        ${
            officeNumber
                ? `Office Number: ${officeNumber}`
                : github
                ? `GitHub: ${github}`
                : school
                ? `School: ${school}`
                : null
        }`
        );

        const { confirm } = await inquirer.prompt([
            {
                type: 'confirm',
                message: 'Is this correct? Y/N',
                name: 'confirm',
            },
        ]);

        return confirm; // returns true or false
    }

    getTeamMembers() {
        return this.teamMembers;
    }
}

module.exports = Team;
