var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy; //It's requiring the passport for our local database authentication.
var FacebookStrategy = require('passport-facebook').Strategy; //It's requiring the passport for our local database authentication.
var mongoose = require('mongoose');
var User = mongoose.model('User');

//==========================FUNCTIONALITY CHECKING for EXTERNAL ENVIRONMENT VARIABLES=========================================
function moduleAvailable(name) { //DECLARING FUNCTION FOR ENV MODULES
  try {
    require.resolve(name);
    return true;
  } catch(e){}
  return false;
}

if (moduleAvailable('../env.js')) {
  var env = require('../env.js');
} else {
  var env = {
    facebook: {
      SECRET: false,
      CLIENTID: false,
      CALLBACKURL: false
    },
    google: {
      SECRET: false,
      CLIENTID: false,
      CALLBACKURL: false
    }
  };
}

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
//================PASSPORT FOR REGULAR LOGIN===================================================

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

//================PASSPORT FOR FB OAUTH LOGIN===================================================
function generateFacebookPhotoUrl(id, accessToken, height, width) {
  var picUrl = "https://media.licdn.com/";
  picUrl += id;
  picUrl += "/picture?width=";
  picUrl += width;
  picUrl += "&height=";
  picUrl += height;
  picUrl += "&access_token=";
  picUrl += accessToken;
  return picUrl;
}

passport.use(new FacebookStrategy({
  clientID:  env.facebook.CLIENTID || process.env['facebook.CLIENTID'],
  clientSecret: env.facebook.SECRET || process.env['facebook.SECRET'] ,
  callbackURL: env.facebook.CALLBACKURL || process.env['facebook.CALLBACKURL'],
  passReqToCallback: true,
  profileFields: ['id', 'name', 'emails', 'photos']
},
function(req, accessToken, refreshToken, profile, done) {
  User.findOne({
    email: profile.emails[0].value
  }, function(err, user) {
    if (err) return done(err, null);
    if (user) {
      console.log("Current User, Logging In");
      return done(null, user);
    } else {
      console.log("New User, Registering and Logging In");
      var userModel = new User();
      console.log(userModel);
      if (profile.emails) {
        userModel.email = profile.emails[0].value;
      } else {
        userModel.email = profile.username + "@facebook.com";
      }
        userModel.image = generateFacebookPhotoUrl(profile.id, accessToken, 500, 500);
        userModel.facebookId = profile.id;
        userModel.username = profile.name.givenName + " " + profile.name.familyName;
        userModel.save(function(err, userSaved) {
          if (err) {
            return err;
          }
          return done(err, userSaved);
        })
      }
    });
}
));


