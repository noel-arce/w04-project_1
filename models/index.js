var mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/coast-to-coast' // plug in the db name you've been using
);

// After creating a new model, require and export it:
// module.exports.Tweet = require("./tweet.js");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callbackk) {
	console.log('db is open for business');
});

module.exports.Trip = require('./trip.js');
module.exports.Activity = require('./activity.js');