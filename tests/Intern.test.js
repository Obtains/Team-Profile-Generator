const Intern = require('../lib/Intern');

test('Create an Intern Object', () => {
    const intern = new Intern('Zoro', 3, 'roronoazoro@gmail.com', 'East Blue');

    expect(intern.school).toEqual(expect.any(String));
});