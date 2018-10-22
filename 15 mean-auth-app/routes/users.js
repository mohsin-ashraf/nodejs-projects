const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");


// register
router.post("/register", (req, res) => {

	// Creating a new user
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	// Check to see if username already exists.
	User.findOne({ username: newUser.username }).then(user => {
		if (!user) {
			// Adding User
			User.addUser(newUser, (err, user) => {
				if (err) {
					res.json({
						success: false,
						message: "Failed to register user"
					});
				} else {
					res.json({
						success: true,
						message: "User registered successfully."
					})
				}
			});
		} else {
			res.json({
				success: false,
				message: "User already exists"
			});
		}
	});

});

// authenticate
router.post("/authenticate", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, (err, user) => {
		if (err) {
			throw err;
		}
		if (!user) {
			return res.json({
				success: false,
				message: "User not found"
			});
		}
		User.comparePassword(password, user.password, (err, isMatch) => {
			if (err) throw err;
			if (isMatch) {
				const token = jwt.sign({data:user}, config.secret, {
					expiresIn: 604800
				});
				return res.json({
					success: true,
					token: 'JWT '+token,
					user: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email
					}
				});
			} else {
				res.json({
					success: false,
					message: "Wrong password"
				});
			}
		});
	});
});

// profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
	res.json({
		user: req.user
	});
});




module.exports = router;