//Let's create the manager test now.

const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Is constructed with properties from the Employee class', () => {
        const manager = new Manager({
            name: 'Isayah',
            id: 1,
            email: 'test@test.com',
            role: 'Manager',
            officeNumber: 420,
        });
        test('Manager has a name, id, email address, and role', () => {
            expect(manager.name).toBe('Isayah');
            expect(manager.id).toBe(1);
            expect(manager.email).toBe('test@test.com');
            expect(manager.role).toBe('Manager');
        });

        describe("Also contains information about the manger's office number and updated role", () => {
            test('Manager has an office number', () => {
                expect(manager.officeNumber).toBe(420);
            });

            test('Manager has the role: "manager"', () => {
                expect(manager.role).toBe('Manager');
            });
        });

        describe('Get role()', () => {
            test("manager.getRole() returns 'Manager'", () => {
                expect(manager.getRole()).toBe('Manager');
            });
        });
    });
});
