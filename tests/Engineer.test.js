const Engineer = require('../lib/Engineer');

test('Create an Engineer Object', () => {
    const engineer = new Engineer('Zoro', 3, 'roronoazoro@gmail.com', 'roronoazoro');

    expect(engineer.github).toEqual(expect.any(String));
});