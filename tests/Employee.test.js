const Employee = require("../lib/Employee");

test('Create an Employee Object', () => {
    const employee = new Employee('Zoro', 3, 'roronoazoro@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});