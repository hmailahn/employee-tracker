const cTable = require('console.table');
const inquirer = require('inquirer');
const { query } = require('./db/connection');
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

//done
const promptUser = () => {
 menu();
}

//done
const menu = () => {
    return inquirer.prompt([ 
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'EXIT']
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
        if(data.options === 'EXIT') {
            db.end();
        }
    })
}

//done
const viewDepartments = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table('All Departments:', res);
        menu();
    })
}

//done
const viewRoles = () => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table('All roles:', res);
        menu();
    })
}

//works
const viewEmployees = () => {
    const sql = `SELECT employee.employee_id, employee.first_name, employee.last_name, employee.manager_id, roles.title_name, roles.salary, departments.id AS department
    FROM employee
    LEFT JOIN roles
    ON employee.role_id = roles.role_id
    LEFT JOIN departments
    ON roles.department_id = departments.id`;

    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table('All employees: ', res);
        menu();
    })
}

//works
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
        const sql = `INSERT INTO departments (name) VALUES (?)`;
        const params = [
            data.name
        ];
        db.query(sql, params, (err, res) => {
            if (err) throw err;
            viewDepartments();
          });

    })

}

//works
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
        const sql = `INSERT INTO roles (title_name, salary, department_id) VALUES (?,?,?)`;
        const params = [
            data.titleName,
            data.salary,
            data.departmentId
        ];
        db.query(sql, params, (err, res) => {
            if (err) throw err;
            viewRoles();
          });

    })
}
//works
const addEmployee = () => {
    return inquirer.prompt([ 
        {
            type: 'text',
            name: 'firstName',
            message: 'What is the first name of the employee you would like to add?',
            validate: firstName => {
                if (firstName) {
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
            message: 'What is the manager ID of the employee you would like to add?'
        }
    ])
    .then(data => {
        console.log(data);
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
        const params = [
            data.firstName,
            data.lastName,
            data.roleId,
            data.managerId
        ];
        db.query(sql, params, (err, res) => {
            if (err) throw err;
            console.log(res);
            viewEmployees();
          });
    })
}

const updateRole = () => {
    console.log('hi');
    // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
}


db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
}); 

promptUser();



