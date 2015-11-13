var mongoose = require('mongoose');

var CategoriesSchema = new mongoose.Schema({
	communication: [{type: mongoose.Schema.Types.ObjectId, ref: "Problems"}],
	social: [{type: mongoose.Schema.Types.ObjectId, ref: "Problems"}],
	health: [{type: mongoose.Schema.Types.ObjectId, ref: "Problems"}],
	emotional: [{type: mongoose.Schema.Types.ObjectId, ref: "Problems"}],
	technological: [{type: mongoose.Schema.Types.ObjectId, ref: "Problems"}],
});

mongoose.model('Categories', CategoriesSchema);