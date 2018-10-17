const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Registger Route
router.get('/register',(req,res)=>{
	res.render("register");
});

// Login Route
router.get('/login',(req,res)=>{
	res.render("login");
});

// Register Post Route
router.post("/register",(req,res)=>{
	let name = req.body.name;
	let email = req.body.email;
	let username = req.body.username;
	let password = req.body.password;
	let cpassword = req.body.cpassword;

	// validation...
	req.checkBody("name","Name is required").notEmpty();
	req.checkBody("email","email is required").notEmpty();
	req.checkBody("email","Email must be a valid email").isEmail();
	req.checkBody("username","Username is required").notEmpty();
	req.checkBody("password","Password is required").notEmpty();
	req.checkBody("cpassword","Confirm Password is required").notEmpty();
	req.checkBody("cpassword","Passwords should match").equals(req.body.password);

	let errors = req.validationErrors();

	User.findOne({username:username}).then(user =>{
		if (!user){
			if (errors){
				res.render("register",{
					errors:errors
				});
			}else{
				let newUser = new User({
					name,
					email,
					username,
					password
				});
				User.createUser(newUser,(err,user) => {
					if (err){
						throw err;
					}
					req.flash('success_msg','You are registered and can now login');
					res.redirect('/users/login');
				});
			}
		}else{
			req.flash("error_msg","Username already exists");
			res.redirect('/users/register');
		}
	});
});

// Serialize and deSerialize
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.getUserById(id, (err, user) => {
    done(err, user);
  });
});

// Local Strategy
passport.use(new LocalStrategy(
  (username, password, done) => {
    User.getUserByUsername(username,(err,user)=>{
    	if (err) throw err;
    	if (!user){
    		return done(null,false,{message:"User does not exists."});
    	}
    	User.comparePassword(password,user.password,(err,isMatch)=>{
    		if (err) throw err;
    		if (isMatch){
    			return done(null,user);
    		}else{
    			return done(null,false,{message:"Invalid password"});
    		}
    	});
    });
  }
));

// Login using passportJS
router.post('/login', passport.authenticate('local', { successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash:true }),(req,res)=>{
	res.redirect('/');
});


// logout route...
router.get('/logout',(req,res)=>{
	req.logout();
	req.flash("success_msg","You are logged out.");
	res.redirect('/users/login');
});
module.exports = router;