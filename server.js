// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = require("./models/index");

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/my_heroku_app' // plug in the db name you've been using
);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//TRIP INDEX [x]
app.get('/', function (req, res) {
	db.Trip.find().exec(function(err, trips) {
  	res.render("index", {trips: trips});
	});
});

//TRIP SHOW [x]
app.get('/trips/:id', function (req, res) {
	// console.log(req);
	db.Trip.findById(req.params.id, function (err, trip) {
		res.render('trip-show', {trip: trip});
	});
});


//TRIP CREATE [x]
app.post('/trips', function (req, res) {
	var trip = req.body;

	db.Trip.create(trip, function (err, trip){
		if (err) {
			res.send(403, err);
		} else {
			res.send(201, trip);
		}
	});
});

//TRIP UPDATE
//TRIP DELETE

app.listen(app.listen(process.env.PORT || 3000)
);