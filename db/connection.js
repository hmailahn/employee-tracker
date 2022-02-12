const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'H0m3{wADT};',
    database: 'employees'
  });

  module.exports = db;