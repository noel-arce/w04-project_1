var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Activity = require('./activity'); //require Activity model

var TripSchema = new Schema ({
	city: String,
	title: String,
	desc: String,
	act: [Activity.schema] //embed activity model
});

var Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;