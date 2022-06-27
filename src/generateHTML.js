const generateManager = manager => {
    return `
        <div class="card employee-card">
                <div class="card-header bg-primary text-black">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>    
            `;
};

const generateEngineer = engineer => {
    return `
        <div class="card employee-card">
                <div class="card-header bg-primary text-black">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
        </div>
            `;
};

const generateIntern = intern => {
    return `
        <div class="card employee-card">
                <div class="card-header bg-primary text-black">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href=",ailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
        </div>
            `;
};

const generateHTML = employeeArray => {
    cardArray = [];

    for (let i = 0; employeeArray.length>i; i++) {
        const role = employeeArray[i].getRole();

        if (role === 'Manager') {
            cardArray.push(generateManager(employeeArray[i]));
        }
        if (role === 'Engineer') {
            cardArray.push(generateEngineer(employeeArray[i]));
        }
        if (role === 'Intern') {
            cardArray.push(generateIntern(employeeArray[i]));
        }
    }

    const employeeCards = cardArray.join('');
    return generateTeamData(employeeCards);
};

const generateTeamData = employeeCards => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Your Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center text-black">Your Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-aera col-12 d-flex justify-content-center">
                    ${employeeCards}
                </div>
            </div>        
        </div>
    </body>
    </html>
        `;
};

module.exports = generateHTML;