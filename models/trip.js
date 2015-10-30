var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TripSchema = new Schema ({
	city: { type: String, required: true },
	title: { type: String, required: true },
	desc: String,
	imgUrl: String,
	activities: [{type: Schema.Types.ObjectId, ref: 'Activity'}]
});

var Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;