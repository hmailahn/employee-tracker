INSERT INTO departments (name)
VALUES
('Finance'),
('Legal'),
('IT'),
('Office');

INSERT INTO roles (title_name, salary, department_id)
VALUES
('Payroll Supervisor', 60000.00, 1),
('Legal Assistant', 70000.00, 2),
('Help Desk Associate', 40000.00, 3),
('Office Manager', 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Janice', 'Smith', 4, NULL),
('Bill', 'Frog', 1, 1),
('Karrie', 'Singer', 3, 1);