const cTable = require('console.table');
const inquirer = require('inquirer');
const db = require('./db/connection');
// console.table([
//     {
//       name: 'foo',
//       age: 10
//     }, {
//       name: 'bar',
//       age: 20
//     }
//   ]);
  
//   // prints
//   name  age
//   ----  ---
//   foo   10
//   bar   20

const promptUser = () => {
    return inquirer.prompt([ 
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
    .then(data => {
        
        if (data.options === 'View all departments'){
            // console.log("hello")
            viewDepartments();
        } 
        if (data.options === 'View all roles'){
            viewRoles();
        }
        if (data.options === 'View all employees'){
            viewEmployees();
        }
        if (data.options === 'Add a department'){
            addDepartment();
        }
        if (data.options === 'Add a role'){
            addRole();
        }
        if (data.options === 'Add an employee'){
            addEmployee();
        }
        if (data.options === 'Update an employee role'){
            updateRole();
        }
    })
}

const viewDepartments = () => {
    console.log('hi');
    ////formatted table showing department names and department ids
}

const viewRoles = () => {
    console.log('hi');
    // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
}

const viewEmployees = () => {
    console.log('hi');
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
}

const addDepartment = () => {
    return inquirer.prompt([ 
        {
            type: 'text',
            name: 'name',
            message: 'What is the name of the department you would like to add?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
            
        }
    ])
    .then(data => {
        console.log(data);
    })
    //  and that department is added to the database
}

const addRole = () => {
    return inquirer.prompt([ 
        {
            type: 'text',
            name: 'titleName',
            message: 'What is the name of the role you would like to add?',
            validate: titleName => {
                if (titleName) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
            
        },
        {
            type: 'text',
            name: 'salary',
            message: 'What is the salary of the role you would like to add?',
            validate: salary => {
                if (salary) {
                    return true;
                } else {
                    console.log('You need to enter a salary!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'departmentId',
            message: 'What is the department ID of the role you would like to add?',
            validate: departmentId => {
                if (departmentId) {
                    return true;
                } else {
                    console.log('You need to enter a department ID!');
                    return false;
                }
            }
        }
    ])
    .then(data => {
        console.log(data);
    })
    // and that role is added to the database
}

const addEmployee = () => {
    return inquirer.prompt([ 
        {
            type: 'text',
            name: 'firstName',
            message: 'What is the first name of the employee you would like to add?',
            validate: firstName => {
                if (firstnameName) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
            
        },
        {
            type: 'text',
            name: 'lastName',
            message: 'What is the last name of the employee you would like to add?',
            validate: lastName => {
                if (lastName) {
                    return true;
                } else {
                    console.log('You need to enter a last name!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'roleId',
            message: 'What is the role ID of the employee you would like to add?',
            validate: roleId => {
                if (roleId) {
                    return true;
                } else {
                    console.log('You need to enter a role ID!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'managerId',
            message: 'What is the manager ID of the employee you would like to add?',
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log('You need to enter a manager ID!');
                    return false;
                }
            }
        }
    ])
    .then(data => {
        console.log(data);
    })
    // THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
}

const updateRole = () => {
    console.log('hi');
    // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
}


//does database need to be conencted before promptUser?

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
}); 

promptUser();



