var mongoose = require('mongoose');

var ProblemsSchema = new mongoose.Schema({
	title: String,
	description: String,
	severity: Number,
	image: String, 
	solutions: [{type: mongoose.Schema.Types.ObjectId, ref: "Solutions"}],
	category: String,
	// category: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}],
	postedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

mongoose.model('Problems', ProblemsSchema);