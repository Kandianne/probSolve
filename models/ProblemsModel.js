var mongoose = require('mongoose');

var ProblemsSchema = new mongoose.Schema({
	title: String,
	description: String,
	level: Number,
	solutions: [{type: mongoose.Schema.Types.ObjectId, ref: "Solutions"}],
	category: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}],
	postedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

mongoose.model('Problems', ProblemsSchema);