var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Problems = mongoose.model('Problems');
var jwt = require("express-jwt");
var auth = jwt({
	secret: "problem_solvers",
	userProperty: "payload"
})

router.post("/newProblem", function(req, res){
	console.log(req.body)
	console.log("getting to 13proroutes")
});


module.exports = router;