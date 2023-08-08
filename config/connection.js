// // Set up MySQL connection.
// var mysql = require("mysql2");


// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "pcpartsDB"
// });

// // for Heroku
// var connection = mysql.createConnection(process.env.JAWSDB_URL);

// // Make connection.
// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;



var mysql = require("mysql2");
var connection;

if (process.env.JAWSDB_URL) {
  // For Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // For local development
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "pcpartsDB"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
