var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET contact page. */
router.get("/", function(req, res, next) {
  res.render("contact", { title: "Contact" });
});

// Send email
router.post("/send", (req, res, next) => {
  var tranporter = nodemailer.createTransport({
    service: "eamiling service (Gmail, yahoo etc)",
    auth: {
      user: "your email",
      pass: "your password"
    }
  });
  var mailOptions = {
    from: "Name from where the email is received",
    to: "Email to which you want to send",
    subject: "Hello from pc repair app",
    text:
      "You have a submission from... name : " +
      req.body.name +
      " Email : " +
      req.body.email +
      " Message : " +
      req.body.message,
    html:
      "<p>You have a submission from... </p> <ul><li>Name : " +
      req.body.name +
      "</li> <li>Email : " +
      req.body.email +
      "</li> <li>Message : " +
      req.body.message +
      "</li></ul>"
  };
  tranporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    {
      console.log("Message sent : " + info.response);
      res.redirect("/");
    }
  });
});
module.exports = router;
