var express = require("express")
var bodyParser = require("body-parser")

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));
//extended true: allow a deep dive.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "burgers_db"
});

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controllers.js');

app.use('/', routes);




connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});


app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
