const express = require("express");
const router = express.Router();
const Business = require("../models/Business");

router.get("/", (req, res) => {
  Business.find({}).then(businesses => {
    console.log(businesses);
    res.render("businesses", {
      businesses: businesses
    });
  }).catch(error => {
    console.log("ERROR : ", error)
  });
});


router.get("/add", (req, res) => {
  res.render("addbusiness");
});


router.get("/show/:id", (req, res) => {
  Business.findById({ _id: req.params.id }).then(business => {
    res.render("show", {
      business: business
    });
  })
});


router.get("/edit/:id", (req, res) => {
  Business.findById({ _id: req.params.id }).then(result => {
    res.render("edit",
      { result: result });
  }).catch(err => {
    console.log("ERROR");
  })
});


router.get("/category/:category", (req, res) => {
  res.send("Index /category/category route");
});


router.post("/add", (req, res) => {
  req.checkBody("bname", "Name is required").notEmpty();
  req.checkBody("category", "Category is required").notEmpty();
  req.checkBody("city", "City is required").notEmpty();

  let errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    res.render("addbusiness", {
      errors: errors
    });
  } else {
    const newBusiness = new Business({
      name: req.body.bname,
      category: req.body.category,
      website: req.body.website,
      phone: req.body.phone,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zipcode
    });
    newBusiness.save().then(result => {
      console.log("Successfully saved the record");
      req.flash("success_msg", "Business Added");
      res.redirect("/business");
    }).catch(error => {
      console.log("Failed to save the record");
      res.send("errors");
    })
  }
});

router.post("/edit/:id", (req, res) => {
  req.checkBody("bname", "Name is required").notEmpty();
  req.checkBody("category", "Category is required").notEmpty();
  req.checkBody("city", "City is required").notEmpty();

  let errors = req.validationErrors();
  if (errors) {
    Business.findById({ _id: req.params.id }).then(result => {
      console.log(errors);
      res.render("edit", {
        errors: errors,
        result: result
      });
    });
  } else {
    const newBusiness = {
      name: req.body.bname,
      category: req.body.category,
      website: req.body.website,
      phone: req.body.phone,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zipcode
    };
    Business.update({ _id: req.params.id }, newBusiness, (err, result) => {
      res.redirect("/business");
    });
  }
});

router.post("/delete/:id", (req, res) => {
  Business.remove({ _id: req.params.id }, (err, result) => {
    if (err) {
      req.flash("error_msg", "Unable to delete the record");
      console.log("Unable to delete the record");
    } else {
      req.flash("success_msg", "Record is delete successfully.");
      res.redirect("/business");
    }
  });
});


module.exports = router;