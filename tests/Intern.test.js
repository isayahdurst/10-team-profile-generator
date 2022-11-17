const Intern = require('../lib/Intern');

describe('Intern', () => {
    const intern = new Intern({
        name: 'Isayah',
        id: 1,
        email: 'test@test.com',
        school: 'UCB',
    });
    describe('Intern is constructed with properties extended from Employee class', () => {
        test('Super constructor works', () => {
            expect(intern.name).toBe('Isayah');
            expect(intern.id).toBe(1);
            expect(intern.email).toBe('test@test.com');
        });
    });

    describe('intern has a school property', () => {
        test('school attribute exists', () => {
            expect(intern.school).toBe('UCB');
        });

        test('getSchool() returns UCB', () => {
            expect(intern.getSchool()).toBe('UCB');
        });
    });
});
