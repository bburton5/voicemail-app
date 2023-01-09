// Imports
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "buttons_db",
  },
  console.log(`Connected to the buttons_db database`)
);
