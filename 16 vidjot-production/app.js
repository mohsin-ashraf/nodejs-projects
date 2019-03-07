const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const passport = require("passport");
const app = express();
const db = require("./config/database");

const port = process.env.PORT || 3000;


// Global Promise
mongoose.Promise = global.Promise;

// Connecting to mongoose
mongoose.connect(db.mongoURI, { useNewUrlParser: true }).then(() => {
  console.log("Successfully connected to the database.");
}).catch(() => {
  console.log("Failed to connect to database");
});

app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// session middlewares
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}));

// passport middlewares
app.use(passport.initialize());
app.use(passport.session());

// Connect flash messages
app.use(flash());

// Global Users
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});




app.get('/', (req, res) => {
  res.render('index', {
    title: "Home"
  });
});
app.get('/about', (req, res) => {
  res.render('about', {
    title: "About"
  });
});

const ideas = require("./routes/ideas");
const users = require("./routes/users");
require("./config/passport")(passport);


app.use("/ideas", ideas);
app.use("/users", users);




app.listen(port, () => {
  console.log("URI TO MONGODB", db.mongoURI);
  console.log("Server is running on port ", port);
});