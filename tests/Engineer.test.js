const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const engineer = new Engineer({
        name: 'Isayah',
        id: 1,
        email: 'test@test.com',
        github: 'isayahdurst',
    });
    describe('Engineer is constructed with the correct properties, including those from Employee parent classs', () => {
        test('Engineer is created with a name, id, email address', () => {
            expect(engineer.name).toBe('Isayah');
            expect(engineer.id).toBe(1);
            expect(engineer.email).toBe('test@test.com');
        });
    });

    describe('Engineer also has a gitHub username', () => {
        test('Engineer.github returns a github username', () => {
            expect(engineer.github).toBe('isayahdurst');
        });
    });

    describe("getGithub() returns the engineer's github address", () => {
        test('getGithub()', () => {
            expect(engineer.getGithub()).toBe('isayahdurst');
        });
    });
});
