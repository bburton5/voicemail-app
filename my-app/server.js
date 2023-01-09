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
  console.log(`Connected to the buttons_db database.`)
);

// Function to query all button names
let viewAllButtons = (results) => {
  db.query(`SELECT * FROM button;`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};

viewAllButtons();
