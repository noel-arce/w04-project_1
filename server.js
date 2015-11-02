// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require('express-session');
var db = require("./models/index");
var cookieparser = require('cookie-parser');

// MIDDLEWARE
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(cookieparser());

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
	saveUninitialized: true,
	resave: true,
	secret: "superSecretCookie",
	cookie: {maxAge: 600000}
}));

// TRIP INDEX - renders to the homepage of the app
app.get('/', function (req, res) {
	db.Trip.find().exec(function(err, trips) { //finds all trips in database
  	res.render("index", {trips: trips}); //renders all trips found in database
	});
});

// SHOW ONE TRIP - renders to page of selected trip from the homepage
app.get('/trips/:id', function (req, res) {
	// console.log(req);
	db.Trip.findById(req.params.id).populate('activities').exec(function (err, trip) { //finds trip by ID and populates referenced data in activities
		res.render('trip-show', {trip: trip}); //renders page with populated data
	});
});

// CREATE TRIP - creates/saves new trip to database from the modal
app.post('/trips', function (req, res) {
	var trip = req.body;
	//console.log(trip);
	db.Trip.create(trip, function (err, trip){
		if (err) {
			res.send(403, err);
		} else {
			res.send(201, trip);
		}
	});
});

//CREATE ACTIVITY TO TRIP [x]
app.post('/trips/:id/activities', function (req, res) {
	var activity = req.body;
	//console.log(trip);
	db.Trip.findById(req.params.id, function (err, trip) { //finds trip in db by ID
		db.Activity.create(activity, function (err, activity){ //creates new activity for that trip and saves to db
			if (err) {
				res.json({err: err});
			} else {
				trip.activities.push(activity._id); //pushes activity's ID into referenced activity schema in trip model
				trip.save(); //saves trip data with newly added activity data
				res.status(201).json(activity);
			}
		});
	});
});

//DELETE TRIP [x]
app.delete('/trips/:id', function (req, res) {
	db.Trip.remove({_id: req.params.id}, function (err) { //removes trip by ID in database
		if (err) {
			console.log(err);
		} else {
			res.status(200).json("deleted");
		}
	});
});




//============================ USER SIGN UP/LOGIN ROUTES ============================//



app.get('/current-user', function (req, res) {
	res.json({ user: req.session.userId, cookie: req.cookies.userId });
});

//SHOW SIGNUP [x]
// app.get('/signup', function (req, res) {
// 	res.render('signup');
// });

// CREATE NEW USER - SIGNUP [x]
app.post('/api/users', function (req, res) {
	var user = req.body;

	console.log("new user is: ", req.body);

		db.User.createSecure(user.email, user.password, function (err, user) {
			if (err) {
				console.log("the error with creating a new user is: ", err);
			}
			else {
				req.session.userId = user._id;
				res.cookie('userId', user._id);
				res.json(user);
				// req.session.user = user;
				console.log("the created user is: ", user);
			}
		});
});



app.post('/userlogin', function (req, res) {
	var user = req.body;

	db.User.authenticate(user.email, user.password, function (err, user) {
		if (err) {
			console.log(err);
			res.send(401, err);
		} else {
			req.session.userId = user._id;
			res.cookie('userId', user._id);
			res.json(user);
		} 
	});
});

//LOGOUT
app.post('/logout', function (req, res) {
	req.session.userId = null;
	res.clearCookie('userId', {path: '/'});
	db.Trip.find().exec(function(err, trips) { //finds all trips in database
  	res.render("index", {trips: trips}); //renders all trips found in database
	});
});

app.listen(app.listen(process.env.PORT || 3000)
);


