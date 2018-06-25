const express = require("express");
const stripe = require("stripe")("sk_test_HXZrgRdzQYTleR74RHGknW8r");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("index");
});
app.post("/charge", (req, res, next) => {
  const amount = 2500;
  stripe.customers
    .create({
      email: req.body.stripEmail,
      source: req.body.stripeToken
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Learn web development front to back with traversy Media",
        currency: "usd",
        customer: customer.id
      })
    )
    .then(charge => res.render("success"));
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
