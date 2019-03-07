const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/User");
router.get("/login", (req, res) => {
  res.render("users/login");
});

router.get("/register", (req, res) => {
  res.render("users/register");
});

// Login post
router.post("/login", (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/ideas',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Register post
router.post("/register", (req, res) => {
  let errors = [];
  if (req.body.password != req.body.cpassword) {
    errors.push({ text: "Passwords do not match!" });
  }
  if (req.body.password.length < 4) {
    errors.push({ text: "Password must be 4 charactor long" });
  }

  if (errors.length > 0) {
    res.render("users/register", {
      errors: errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cpassword: req.body.cpassword
    });
  } else {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          console.log("EMAIL ALREADY EXISTS");
          req.flash("error_msg", "Email already exists");
          res.redirect("/users/register");
        } else {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save().then(user => {
                req.flash("success_msg", "You are now registered and can login");
                res.redirect('/users/login');
              }).catch(err => {
                console.log(err);
                return;
              });
            });
          });
        }
      });
  }
});

// logout user
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
  res.redirect('/users/login');
});

module.exports = router;