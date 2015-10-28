var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema ({
	text: String
});

var Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;