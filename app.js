const cTable = require('console.table');
const inquirer = require('inquirer');
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
    console.log('hi');
    // THEN I am prompted to enter the name of the department and that department is added to the database
}

const addRole = () => {
    console.log('hi');
    // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
}

const addEmployee = () => {
    console.log('hi');
    // THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
}

const updateRole = () => {
    console.log('hi');
    // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
}

promptUser();