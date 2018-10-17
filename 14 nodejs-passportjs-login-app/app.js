const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const exphbs = require("express-handlebars");
const expressValidator = require("express-validator");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const LocalStrategy = require("passport-local").Strategy;

mongoose.connect("mongodb://localhost:27017/login-app",{useNewUrlParser:true}).then(()=>{
	console.log("Connected to databse successfully");
}).catch(err =>{
	console.log("Unable to connect to database ",err);
});

// routes
const indexRoute = require("./routes/index");
const usersRoute = require("./routes/users");

// init app
const app = express();

// middlewares...

// body-parser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// View engine middlewares
app.set("views",path.join(__dirname,"views"));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set Static folder
app.use(express.static(path.join(__dirname,"public")));

// Express Session
app.use(session({
	secret:"secret",
	saveUninitialized:true,
	resave:true
}));

// PassportJS Middlewares...
app.use(passport.initialize());
app.use(passport.session());


// Validator middleware...
app.use(expressValidator());

// Connect flash...
app.use(flash());

// Global Variables...
app.use((req,res,next)=>{
	res.locals.success_msg = req.flash("success_msg");
	res.locals.error_msg = req.flash("error_msg");
	res.locals.error = req.flash("error");
	res.locals.user = req.user || null;
	console.log(res.locals.user);
	next();
});


// Routes
app.use('/',indexRoute);
app.use('/users',usersRoute);


app.listen(port,()=>{
	console.log("Server is running on port ",port);
});