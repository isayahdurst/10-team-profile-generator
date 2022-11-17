const Team = require('./lib/Team');
const fs = require('fs');

const team = new Team();

(async function () {
    await team.createTeam();
    const teamMembers = team.getTeamMembers();
    let managerSection = ``;
    let engineerSection = ``;
    let internSection = ``;

    for (const member of teamMembers) {
        if (member.role === 'Manager') {
            managerSection += `<div class="card">
                <div class="card-top">
                    <div class="name">${member.name}</div>
                    <div class="role">${member.role}</div>
                </div>
                <div class="card-content">
                    <ul>
                        <li>ID: ${member.id}</li>
                        <li>Email: <a href='mailto:${member.email}'>${member.email}</a></li>
                        <li>Office Number: ${member.officeNumber}</li>
                    </ul>
                </div>
            </div>`;
        } else if (member.role === 'Engineer') {
            engineerSection += `
            <div class="card">
                <div class="card-top">
                    <div class="name">${member.name}</div>
                    <div class="role">${member.role}</div>
                </div>
                <div class="card-content">
                    <ul>
                        <li>ID: ${member.id}</li>
                        <li>Email: <a href='mailto:${member.email}'>${member.email}</a></li>
                        <li>GitHub: <a href='https://www.github.com/${member.github}' target='_blank' rel='noopener noreferrer'>${member.github}</a></li>
                    </ul>
                </div>
            </div>`;
        } else if (member.role === 'Intern') {
            internSection += `<div class="card">
                <div class="card-top">
                    <div class="name">${member.name}</div>
                    <div class="role">${member.role}</div>
                </div>
                <div class="card-content">
                    <ul>
                        <li>ID: ${member.id}</li>
                        <li>Email: <a href='mailto:${member.email}'>${member.email}</a></li>
                        <li>School: ${member.school}</li>
                    </ul>
                </div>
            </div>`;
        } else {
            throw new Error(`Category not found for: ${member}`);
        }
    }

    let htmlTemplate = fs.readFileSync('./src/template.html', 'utf-8');
    htmlTemplate = htmlTemplate.replace('${managerContent}', managerSection);
    htmlTemplate = htmlTemplate.replace('${engineerContent}', engineerSection);
    htmlTemplate = htmlTemplate.replace('${internContent}', internSection);

    fs.writeFileSync('./dist/index.html', htmlTemplate);
})();
