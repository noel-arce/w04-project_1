var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema ({
	title: String,
	details: String
});

var Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;