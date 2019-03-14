var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


/* ADDED BELOW - Marcos //

module.exports {

var connection = mysql.createConnection({
    host     : 'localhost', //add our filepath
    user     : 'student',
    password : 'student',
    database : 'chat'
  });

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

console.log('The solution is: ', rows[0].solution)
})

connection.end()
};

*/