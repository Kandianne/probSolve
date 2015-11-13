var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require("jsonwebtoken")

var ProblemsSchema = new mongoose.Schema({
	title: String,
	description: String,
	postedBy: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
});

mongoose.model('Problems', ProblemsSchema);