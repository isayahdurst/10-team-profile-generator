const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Constructed correctly', () => {
        const employee = new Employee({
            name: 'Isayah',
            id: 1,
            email: 'test@test.com',
            role: null,
        });
        // Passing an object with named fields for better organization

        test('Is constructed with a name, email, and ID', () => {
            expect(employee.name).toBe('Isayah');
            expect(employee.id).toBe(1);
            expect(employee.email).toBe('test@test.com');
        });

        test('getName() returns the name of the employee', () => {
            expect(employee.getName()).toEqual('Isayah');
        });

        test("getId() returns the Employee's ID", () => {
            expect(employee.getId()).toEqual(1);
        });

        test("getEmail() returns the employee's email", () => {
            expect(employee.getEmail()).toEqual('test@test.com');
        });

        test("getRole() returns 'Employee'", () => {
            expect(employee.getRole()).toEqual('Employee');
        });
    });
});
