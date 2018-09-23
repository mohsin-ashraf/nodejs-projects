const express = require("express");
const path = require("path");
const app = express();
const cheerio = require("cheerio");
const fetch = require("node-fetch");


app.set('views',path.join(__dirname,"views"))
app.set("view engine","ejs");


app.get("/",(req,res) =>{
  fetch("https://projecteuler.net")
  .then(res => res.text())
  .then(body => {
    let $ = cheerio.load(body);
    let content = $("div#about_page").text();
    res.render('index',{
      content:content
    })
  });
});


app.get('/problems',(req,res) =>{
  fetch("https://projecteuler.net/archives;page=1")
  .then(res => res.text())
  .then(body => {
    let $ = cheerio.load(body);
    let table = $('table#problems_table tr td');
    console.log("Length of the table "+table.length+"\n");
    
    myObject = [];

    for (let i = 0 ; i < table.length-2; i+=2){
      myObject.push({
        id:$(table[i]).text(),
        problem:$(table[i+1]).text(),
        solvedBy:$(table[i+2]).text()
      })
      i+=1;
      console.log($(table[i]).text());
    }
    console.log("End of printing...");
    res.render('problems',{
      body:myObject,
    })
  });

});


app.get("/register",(req,res) =>{
  res.render("register");
});

app.get('/login',(req,res) =>{
  res.render("login");
});

app.get("/recent",(req,res) => {
  fetch("https://projecteuler.net/recent")
  .then(res => res.text())
  .then(body => {
    let $ = cheerio.load(body);
    let table = $('table#problems_table tr td');
    console.log("Length of the table "+table.length+"\n");
    
    myObject = [];

    for (let i = 0 ; i < table.length-2; i+=2){
      myObject.push({
        id:$(table[i]).text(),
        problem:$(table[i+1]).text(),
        solvedBy:$(table[i+2]).text()
      })
      i+=1;
      console.log($(table[i]).text());
    }
    console.log("End of printing...");
    res.render('problems',{
      body:myObject,
      pageNumber:''
    })
  });
});

app.get("/problems/:page_number",(req,res) =>{
  fetch("https://projecteuler.net/archives;page="+req.params.page_number)
  .then(res => res.text())
  .then(body => {
    let $ = cheerio.load(body);
    let table = $('table#problems_table tr td');
    console.log("Length of the table "+table.length+"\n");
    
    myObject = [];

    for (let i = 0 ; i < table.length-2; i+=2){
      myObject.push({
        id:$(table[i]).text(),
        problem:$(table[i+1]).text(),
        solvedBy:$(table[i+2]).text()
      })
      i+=1;
      console.log($(table[i]).text());
    }
    console.log("End of printing...");
    res.render('problems',{
      body:myObject,
      pageNumber:req.params.page_number
    })
  });
});

app.get("/problem/:problem_number",(req,res) =>{
  fetch("https://projecteuler.net/problem="+req.params.problem_number)
  .then(result => result.text())
  .then(body =>{
    let $ = cheerio.load(body);
    let problemTitle = $('h2').text();
    let problemContent = $('div.problem_content').text();
    res.render("problem",{
      problemTitle:problemTitle,
      problemContent:problemContent,  
    });
  });
});

app.get("/news",(req,res)=>{
  fetch('https://projecteuler.net/news')
  .then(result => result.text())
  .then(body => {
    let $ = cheerio.load(body);
    let content = $('div#news_page').text();
    console.log(content);
    res.render('news',{
      content:content
    })
  });
});

// For the routes that does not exist
app.get("*",(req,res) =>{
  res.render("pageNotFound");
})

app.listen(3000,() =>{
  console.log("Server is running on port 3000")
});