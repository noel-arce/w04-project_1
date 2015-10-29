// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require('express-session');
var db = require("./models/index");

// MIDDLEWARE
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	saveUninitialized: true,
	resave: true,
	secret: "superSecretCookie",
	cookie: {maxAge: 600000}
}));

// TRIP INDEX [x]
app.get('/', function (req, res) {
	db.Trip.find().exec(function(err, trips) {
  	res.render("index", {trips: trips});
	});
});

// SHOW ONE TRIP [x]
app.get('/trips/:id', function (req, res) {
	// console.log(req);
	db.Trip.findById(req.params.id).populate('activities').exec(function (err, trip) {
		res.render('trip-show', {trip: trip});
	});
});

// CREATE TRIP [x]
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
	db.Trip.findById(req.params.id, function (err, trip) {
		db.Activity.create(activity, function (err, activity){
			if (err) {
				res.json({err: err});
			} else {
				trip.activities.push(activity._id);
				trip.save();
				res.status(201).json(activity);
			}
		});
	});
});

//DELETE TRIP [x]
app.delete('/trips/:id', function (req, res) {
	db.Trip.remove({_id: req.params.id}, function (err) {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json("deleted");
		}
	});
});

//SHOW SIGNUP
app.get('/signup', function (req, res) {
	res.render('signup');
});

// CREATE NEW USER
app.post('/users', function (req, res) {
	var user = req.body;
	console.log(user);
		db.User.createSecure(user.email, user.password, function (err, user) {
			res.json({user: user, msg: "john is the best"});
			// req.session.userId = user._id;
			// req.session.user = user;
		
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		res.json(user);
	// 	}
	});
});

//SHOW LOGIN
// app.get('/login', function (req, res) {
// 	res.render('login');
// });

//TRIP UPDATE
// app.put('/trips/:id', function (req, res) {
// 	db.Trip.findById(req.params.id, function (err, trip) {
// 		res.send('Got a PUT request at /user');
// 	});
// });

//CREATE DESCRIPTION FOR TRIP
// app.post('/api/trips/:tripId/desc', function(req, res) { //fix the path
// 	var tripId = req.params.tripId;
// 	var newDesc = new Desc(req.body.desc);

// 	Trip.findOne({_id: tripId}, function (err, foundTrip) {
//     foundTrip.desc.push(newDesc);
//     foundTrip.save(function (err, savedTrip) {
//       res.json(newDesc);
//     });
//   });
		
// });

app.listen(app.listen(process.env.PORT || 3000)
);