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
	console.log(req.body, "12 of probs routes");
	var newProblem = new Problems(req.body);
	console.log(newProblem, "THIS IS NEW PROOOOOOOOOOOOOOOOOOOOBS-------------------");
	newProblem.save(function(err, posted){
		if(err) return res.status(500).send({err: "The server sucks right now"});
		if(!posted) return res.status(400).send({err: "Couldn't create problem"});
		res.send();
	})
});

router.get("/", function(req, res){
	Problems.find({})
	.populate({
		path: "postedBy",
		model: "User",
		select: "name"
	})
	.exec(function(err, problems) {
	if(err) return res.status(500).send({err: "error getting all probs"});
	if(!problems) return res.status(400).send({err: "probs don't exist"});
	res.send(problems);
});
});

router.param('probId', function(req, res, next){
	console.log(req.params)
	next()
});

router.get('/probDetails/:probId', function(req, res){
	console.log(req.params.probId, "38 in prob routes");
	Problems.findOne({_id: req.params.probId}, function(err, theProb){
		if(err) return res.status(500).send('serve probs with probs');
		if(!theProb) return res.status(400).send('could not find that prob yo');
		res.send(theProb);
	});
});


module.exports = router;