const express = require("express");
const router = express.Router();
const auth = require("../authConfig/auth");

// Get Homepage
router.get('/',auth.ensureAuthenticated,(req,res)=>{
	res.render("index");
});


module.exports = router;