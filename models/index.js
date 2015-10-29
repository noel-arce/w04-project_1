var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/coast-to-coast");

// After creating a new model, require and export it:
// module.exports.Tweet = require("./tweet.js");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callbackk) {
	console.log('db is open for business');
});

module.exports.Trip = require('./trip.js');
module.exports.Activity = require('./activity.js');