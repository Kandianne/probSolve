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
	console.log(newSolution);
	newSolution.save(function(err, posted){
		if(err) return res.status(500).send({err: "The server sucks right now"});
		if(!posted) return res.status(400).send({err: "Couldn't create the solution"});
		res.send();
	})
});

router.get("/", function(req, res){
	Solutions.find({})
	.populate({
		path: "postedBy",
		model: "User",
		select: "name"
	})
	.exec(function(err, solutions) {
		if(err) return res.status(500).send({err: "error getting all solutions"});
		if(!solutions) return res.status(400).send({err: "solutions don't exist"});
		res.send(solutions);
	});
});

router.param("solId", function(req, res, next){
	console.log(req.params)
	next();
});

router.get("/solutionDetails/:solId", function(req, res){
	console.log(req.params.solId, "41solroutes");
	Solutions.findOne({_id:req.params.solId}, function(err, theSolution){
		if(err) return ("there was an urr");
		if(!theSolution) return ("couldn't find it in db");
		res.send(theSolution);
	});
});

module.exports = router;