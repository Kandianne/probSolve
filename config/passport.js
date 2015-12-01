var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy; //It's requiring the passport for our local database authentication.
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy({usernameField: 'email'}, function(email, password, done) { //This password is called from password.authenticate, from user routes.
  User.findOne({email: email}) //find the email in the model from where it's being called. 
  .exec(function(err, user) { 
  	console.log(user)
  	if(err) return done({err: "Server has issues."});
  	if(!user) return done({err: "User does not exist"});
  	if(!user.checkPassword(password)) return done({err: "Invalid username and password combination."});
  	return done(null, user);
  });
}));
