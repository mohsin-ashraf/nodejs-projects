const express = require("express");
const path = require("path");
const app = express();
const cheerio = require("cheerio");
const fetch = require("node-fetch");
const rootControler = require("./controller/RootControler");

app.set('views',path.join(__dirname,"views"))
app.set("view engine","ejs");

app.get("/",rootControler.get_landing_route);

app.get('/problems',rootControler.get_problems_route);

app.get("/register",rootControler.get_register_route);

app.get('/login',rootControler.get_login_route);

app.get("/recent",rootControler.get_recent_route);

app.get("/problems/:page_number",rootControler.get_problems_page_route);

app.get("/problem/:problem_number",rootControler.get_problem_page_route);

app.get("/news",rootControler.get_news_route);


// For the routes that does not exist
app.use((req,res) =>{
  res.render("pageNotFound");
})

app.listen(3000,() =>{
  console.log("Server is running on port 3000")
});