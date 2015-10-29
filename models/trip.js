var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TripSchema = new Schema ({
	city: String,
	title: String,
	details: String,
	imgUrl: String,
	activities: [{type: Schema.Types.ObjectId, ref: 'Activity'}]
});

var Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;