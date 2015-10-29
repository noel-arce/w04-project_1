var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema ({
	title: String,
	desc: String,
	location: String
});

var Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;