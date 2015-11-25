var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport'); //Multiple ways of bringing authentication from different providers. such as fb, local, google, twitch


//---------REGISTRATION---------------------------------------------------------------

router.post('/register', function(req, res) {
	console.log(req.body.name)
	var user = new User(req.body); //Bringing in the request, and adding a document from our schema.
	user.setPassword(req.body.password); //We are running a model function, which encrypts our password.
	user.save(function(err, result) { //We are saving that user to our collection
		if(err) console.log(err); //If err console.log err, either 400-500
		if(err) return res.status(500).send({err: "Issues with the server"}); //Server error
		if(!result) return res.status(400).send({err: "You messed up."}); //error in saving
		console.log("are we getting here man?");
		res.send(); //Completing post.
	})
});

router.post('/login', function(req, res, next) { //goes to passport module, in config.
	console.log(req.body);
	passport.authenticate('local', function(err, user, info){ //calling from the passport
		console.log(info, "25userroutes");
		if(!user) return res.status(400).send(info);
		res.send({token: user.generateJWT()}); //generating a token when there is a user in the collection.
	})(req, res, next);
});

//REQUIRED FOR GETTING ONE USER-------------------------------------------------------

// router.param('id', function(req, res, next, id) {
// 	req._id = id;
// 	User.findOne({_id:id})
// 	.exec(function (err, user) {
// 		if(err) return res.status(500).send({err: "Error inside the server."});
// 		if(!user) return res.status(400).send({err: "That user does not exist"});
// 		req.user = user;
// 		next();
// 	});
// });

//----------GETTING USER AND USERS-----------------------------------------------

// router.get('/:id', function(req, res){
// 	res.send(req.user);
// })

// router.get('/', function(req, res){
// 	var users = res;
// 	User.find({})
// 	.exec(function(err, users) {
// 		if(err) return res.status(500).send({err: "Error inside the server."});
// 		if(!users) return res.status(400).send({err: "Users aren't here :("});
// 			res.send(users);
// 		})
// })



module.exports = router;