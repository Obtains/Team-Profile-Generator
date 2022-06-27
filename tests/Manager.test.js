const Manager = require('../lib/Manager');

test('Create an Manager Object', () => {
    const testNumber = 13;
    const manager = new Manager('Zoro', 3, 'roronoazoro@gmail.com', testNumber);
    expect(manager.officeNumber).toBe(testNumber);
});