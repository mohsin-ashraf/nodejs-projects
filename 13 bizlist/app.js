const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const expressValidator = require("express-validator");

// Routes
const indexRoute = require("./routes/index");
const businessRoute = require("./routes/business");

mongoose.connect("mongodb://localhost:27017/bizlist", { useNewUrlParser: true }).then(result => {
  console.log("Successfully connected to the database.");
}).catch(err => {
  console.log("Failed to connect with the databsae.");
});

const port = 3000;
const app = express();

// Middlewares...

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// express-session middleware
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}));

// connect-flash middleware
app.use(flash());

// Setting up the flash messages for routes
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// express-validator middleware
app.use(expressValidator());

app.use("/", indexRoute);
app.use("/business", businessRoute);


app.listen(port, () => {
  console.log("Server is running on port ", port);
});
