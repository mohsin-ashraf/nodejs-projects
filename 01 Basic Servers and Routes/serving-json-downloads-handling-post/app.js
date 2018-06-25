const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/users", (req, res) => {
  let users = [
    {
      first_name: "Mohsin",
      last_name: "Ashraf",
      age: 23,
      gender: "Male"
    },
    {
      first_name: "Mohsin",
      last_name: "Qamar",
      age: 21,
      gender: "Male"
    },
    {
      first_name: "Usama",
      last_name: "Imran",
      age: 20,
      gender: "Male"
    }
  ];
  res.json(users);
});
app.get("/download", (req, res) => {
  res.download(path.join(__dirname, "/downloads/pdf.pdf"));
});

app.post("/subscribe", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;

  console.log(`User ${name} has subscribed with email ${email}`);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
