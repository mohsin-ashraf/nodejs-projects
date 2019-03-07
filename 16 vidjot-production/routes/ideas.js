const express = require("express");
const router = express.Router();
const { ensureAuthentication } = require("../helpers/auth");
// Requiring models
const Idea = require("../models/Idea");


router.get('/add', ensureAuthentication, (req, res) => {
  res.render('ideas/add', {
    title: "Add Idea"
  });
});

// show ideas get request

router.get("/", ensureAuthentication, (req, res) => {
  Idea.find({ user: req.user.id })
    .sort('date')
    .then(ideas => {
      res.render("ideas/index", {
        ideas: ideas
      })
    })
});



// Add idea process
router.post("/", ensureAuthentication, (req, res) => {
  let errors = [];

  if (!req.body.title) {
    errors.push({ text: "Please add a title" });
  }
  if (!req.body.details) {
    errors.push({ text: "Please add some details" });
  }

  if (errors.length > 0) {
    res.render("ideas/add", {
      errors: errors,
      title: req.body.title.trim(),
      details: req.body.details.trim()
    });
  } else {
    let newUser = {
      title: req.body.title,
      details: req.body.details,
      user: req.user.id
    };



    new Idea(newUser).save().then((idea) => {
      console.log("Idea is saved successfully");
      req.flash("success_msg", "Video idea is added");
      res.redirect("/ideas");
    }).catch(err => {
      console.log("Unable to save idea");
    });
  }

});

// Edit idea process...
// Edit Idea
router.get("/edit/:id", ensureAuthentication, (req, res) => {
  const id = req.params.id;
  Idea.findById({ _id: id }).then(result => {
    if (result.user != req.user.id) {
      req.flash("error_msg", "Not Authorized");
      res.redirect('/ideas');
    }
    res.render("ideas/edit", {
      idea: result
    });
  });
});

router.post("/edit/:id", ensureAuthentication, (req, res) => {
  const id = req.params.id;
  console.log("ID ", id);
  Idea.update({ _id: id }, {
    title: req.body.title,
    details: req.body.details
  }, (err, result) => {
    if (err) {
      console.log("Unable to update Idea...");
    } else {
      console.log("Idea is updated successfully ", result);
    }
    req.flash("success_msg", "Idea is updated.");
    res.redirect("/ideas");
  });

});

router.get("/delete/:id", ensureAuthentication, (req, res) => {
  const id = req.params.id;
  Idea.remove({ _id: id }, () => {
    req.flash('success_msg', "Video Idea removed");
    res.redirect("/ideas");
  });
});



module.exports = router;