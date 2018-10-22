const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const dbConfig = require("./config/database");
 
mongoose.connect(dbConfig.database,{useNewUrlParser:true}).then(()=>{
	console.log("Connect to database successfully");
}).catch(err=>{
	console.log("Unable to connect with database");
});


const app = express();

// requiring routes.
const users = require("./routes/users");

// Setting up port
const port = process.env.PORT || 3000;
// cors middleware...
app.use(cors());

// static public folder
app.use(express.static(path.join(__dirname,"public")));

// body-parser
app.use(bodyParser.json());


// passport middlewares
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);


// Setting up routes
app.use('/users',users);

// Index Route
app.get("/",(req,res)=>{
	res.json({
		message:"Welcome to my node api"
	});
});

app.get("*",(req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'));
});

// Start server
app.listen(port,()=>{
	console.log("Server started on port ",port);
});