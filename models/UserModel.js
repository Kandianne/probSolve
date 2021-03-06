var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require("jsonwebtoken")

var UserSchema = new mongoose.Schema({
	facebookId: String,
	linkedInId: String,
	googleId: String,
	name: {type: String, lowercase: true},
	email: {type: String, lowercase: true},
	anonymous: {type: Boolean, default: false},
	// image: { type: String, default: 'http://1.bp.blogspot.com/-fDYO0D23HvM/VcdBvhO0FiI/AAAAAAAAAoU/7vi6V3TYHp4/s1600/Anonymous.png'},
	passwordHash: String,
	salt: String,
	createdDate: Date,
	deactivatedDate: Date,
	problemsPosted: [{type: mongoose.Schema.Types.ObjectId, ref: "Problems"}],
	solutionsPosted: [{type: mongoose.Schema.Types.ObjectId, ref: "Questions"}]
});

UserSchema.methods.generateJWT = function() {
	var today = new Date();
	var exp = new Date(today);
	exp.setDate(today.getDate() + 36500);
	return jwt.sign({
		id : this._id,
		email : this.email,
		image: this.image,
		exp: exp.getTime() / 1000		
	}, "problem_solvers");
}

UserSchema.methods.setPassword = function(password) {
	this.salt = crypto.randomBytes(64).toString('hex');
	this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex'); //this is asking for buffer or string
}

UserSchema.methods.checkPassword = function(password) {
	var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
	return hash === this.passwordHash;
};

mongoose.model('User', UserSchema);