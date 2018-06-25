const express = require("express");
app = express();

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.get("/about", (req, res, next) => {
  res.send("<h1>About</h1>");
});

app.get("/users/:name", (req, res, next) => {
  var user = req.params.name;
  res.send("<h1>" + user + "</h1>");
});

// This route is note working .....?
app.get("/users/:name/:age", (req, res, next) => {
  var user = req.params.name;
  var age = req.params.age;
  res.send("<h1>" + user + "</h1>"+"<h1>" + age + "</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port ", 3000);
});
