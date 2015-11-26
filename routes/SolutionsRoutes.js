var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Solutions = mongoose.model('Solutions');
var jwt = require("express-jwt");
var auth = jwt({
	secret: "problem_solvers",
	userProperty: "payload"
})

router.post("/", function(req, res){
	console.log(req.body)
	var newSolution = new Solutions(req.body);
	newSolution.save(function(err, posted){
		if(err) return res.status(500).send({err: "The server sucks right now"});
		if(!posted) return res.status(400).send({err: "Couldn't create the solution"});
		res.send();
	})
});

router.get("/", function(req, res){
	Solutions.find({})
	// .populate({
	// 	path: "postedBy",
	// 	model: "User",
	// 	select: "username"
	// })
	.exec(function(err, solutions) {
		if(err) return res.status(500).send({err: "error getting all solutions"});
		if(!solutions) return res.status(400).send({err: "solutions don't exist"});
		res.send(solutions);
	});
});


module.exports = router;