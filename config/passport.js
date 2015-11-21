var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy; //It's requiring the passport for our local database authentication.
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy(function(email, password, done) { //This password is called from password.authenticate, from user routes.
	console.log("passport7", req.body)
  User.findOne({email: email}) //find the email in the model from where it's being called. 
  .exec(function(err, user) {  
  	if(err) return done({err: "Server has issues."});
  	if(!user) return done({err: "User does not exist"});
  	if(!user.checkPassword(password)) return done({err: "Invalid username and password combination."});
  	return done(null, user);
  });
}));
