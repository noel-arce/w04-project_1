var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TripSchema = new Schema ({
	city: String,
	title: String,
});

var Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;