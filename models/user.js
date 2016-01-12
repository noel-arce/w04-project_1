var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

var UserSchema = new Schema ({
	email: { type: String, required: true	},
	passwordDigest: { type: String, required: true },
	trips: [{type: Schema.Types.ObjectId, ref: 'Trip'}]
});

UserSchema.statics.createSecure = function (email, password, callback) {
	
	var user = this;

	bcrypt.genSalt(function (err, salt) {
		bcrypt.hash(password, salt, function (err, hash) {
			console.log(hash);
			user.create({
				email: email,
				passwordDigest: hash
			}, callback);
		});
	});
};

UserSchema.statics.authenticate = function (email, password, callback) {

	this.findOne({email: email}, function (err, foundUser) {
		console.log(foundUser);

		if(!foundUser) {
			console.log("no user found with email " + email);
			callback("Error: no user found", null);
		} else if (foundUser.checkPassword(password)) {
			callback(null, foundUser);
		} else {
			callback("error: incorrect password", null);
		}
	});
};

UserSchema.methods.checkPassword = function(password) {
	return bcrypt.compareSync(password, this.passwordDigest);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;