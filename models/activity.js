var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema ({
	title: { type: String, required: true },
	details: { type: String, required: true }
});

var Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;