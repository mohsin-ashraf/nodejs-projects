const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrype = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


router.post("/signup", (req, res, next) => {
  User.find({ email: req.body.email }).exec().then(user => {
    if (user.length >= 1) {
      return res.status(402).json({
        message: "Email already exists"
      })
    } else {
      bcrype.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err
          });
        } else {
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash
          });

          user.save().then(result => {
            console.log(result);
            res.status(201).json({
              message: "User Created!!!"
            })
          }).catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            })
          });
        }
      })
    }
  });
});

router.post('/login', (req, res, next) => {
  User.find({ email: req.body.email })
    .then(user => {
      console.log(user[0]);
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth Failed email not found"
        })
      }
      bcrype.compare(req.body.password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({
            email: user[0].email,
            userId: user[0]._id
          }, "secret_key", {
              expiresIn: "1h"
            });

          return res.status(200).json({
            message: "Auth Successfull",
            token: token
          })
        }
        res.status(401).json({
          message: "Auth Failed",
        })
      });
    })
});

router.delete('/:userId', (req, res, next) => {
  User.remove({ _id: req.params.userId }).exec().then(result => {
    res.status(200).json({
      message: "User Deleted"
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  })
})


module.exports = router;