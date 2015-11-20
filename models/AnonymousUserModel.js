var mongoose = require('mongoose');

var AnonymousSchema = new mongoose.Schema({
	email: {type: String, lowercase: true, unique: true},
	anonymous: {type: Boolean, default: true},
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
		username : this.username,
		image: this.image,
		exp: exp.getTime() / 1000		
	}, "problem_solvers");
};

UserSchema.methods.setPassword = function(password) {
	this.salt = crypto.randomBytes(64).toString('hex');
	this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.checkPassword = function(password) {
	var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
	return hash === this.passwordHash;
};

mongoose.model('Anonymous', AnonymousSchema);