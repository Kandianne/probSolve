var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Problems = mongoose.model('Problems');
var jwt = require("express-jwt");
var auth = jwt({
	secret: "problem_solvers",
	userProperty: "payload"
})

router.post("/", function(req, res){
	console.log(req.body)

	var newProblem = new Problems(req.body);
	newProblem.save(function(err, posted){
		console.log(err)
		if(err) return res.status(500).send({err: "The server sucks right now"});
		if(!posted) return res.status(400).send({err: "Couldn't create problem"});
		res.send();
	})
});

router.get("/", function(req, res){
	Problems.find({})
	// .populate({
	// 	path: "postedBy",
	// 	model: "User",
	// 	select: "name"
	// })
.exec(function(err, problems) {
	if(err) return res.status(500).send({err: "error getting all probs"});
	if(!problems) return res.status(400).send({err: "probs don't exist"});
	res.send(problems);
});
});


module.exports = router;