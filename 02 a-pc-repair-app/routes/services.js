var express = require("express");
var router = express.Router();
var fs = require("fs");

var result;

fs.readFile("json/services.json", "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    result = JSON.parse(data);
  }
});

router.get("/", function(req, res, next) {
  res.render("services", {
    title: "Services",
    results: result
  });
});

module.exports = router;
