// var express = require("express");
// const exphbs = require('express-handlebars');

// var PORT = process.env.PORT || 8080;

// var app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // Parse application body
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));



// // Import routes and give the server access to them.
// var routes = require("./controllers/pcparts_controller.js");

// app.use(routes);

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });


var express = require("express");
const exphbs = require('express-handlebars');
const path = require('path'); // Make sure to include this

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('.handlebars', exphbs.engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require("./controllers/pcparts_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
