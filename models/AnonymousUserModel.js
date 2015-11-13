var mongoose = require('mongoose');

var AnonymousSchema = new mongoose.Schema({
	username: {type: String, lowercase: true, unique: true},
	passwordHash: String,
	salt: String,
	createdDate: Date,
	deactivatedDate: Date,
	problemsPosted: [{type: mongoose.Schema.Types.ObjectId, ref: "Problems"}],
	solutionsPosted: [{type: mongoose.Schema.Types.ObjectId, ref: "Questions"}]
});

mongoose.model('Anonymous', AnonymousSchema);