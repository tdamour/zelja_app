const mysql = require('mysql');

const conn = mysql.createConnection({
 host: "localhost",
 user: "***",
 password: "***",
 database: "zeljadb",
});

conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
 
module.exports = conn;