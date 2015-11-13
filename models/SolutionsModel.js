var mongoose = require('mongoose');

var SolutionsSchema = new mongoose.Schema({
	title: String,
	description: String,
	level: Number,
	problems: [{type: mongoose.Schema.Types.ObjectId, ref: "Problems"}],
	category: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}],
	postedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

mongoose.model('Solutions', SolutionsSchema);