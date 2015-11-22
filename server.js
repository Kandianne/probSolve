var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');

//==================REQUIRE ROUTES HERE=======================================
require("./Models/ProblemsModel"); 
require("./Models/SolutionsModel"); 
require("./Models/UserModel"); 
// require("./Models/CategoriesModel"); 
require("./config/passport"); 

// var db = process.env.MONGOLAB_URI || env.MONGOLAB_URI || "mongodb://localhost/probSolve";
var db = "mongodb://localhost/probSolve";
mongoose.connect(db, function(err) {
	if (err) return console.log("Error connecting to database: %s. Maybe run mongod??", db);
	var x = new Date();
	console.log("Connected to %s at %s", db, x.toLocaleString());
});

app.set('views', path.join(__dirname, 'views'));
//set the view engine that will render HTML from the server to the client
app.engine('.html', require('ejs').renderFile);
//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//====================DEFINING ROUTE MODULES=================================
var problemsRoutes = require("./routes/ProblemsRoutes");
var solutionsRoutes = require("./routes/SolutionsRoutes");
var userRoutes = require("./routes/UserRoutes");

//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});

app.use("/api/problems", problemsRoutes);
app.use("/api/solutions", solutionsRoutes);
app.use("/api/user", userRoutes);

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});