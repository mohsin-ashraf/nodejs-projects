
const cheerio = require("cheerio");
const fetch = require("node-fetch");

module.exports.get_landing_route = (req,res) =>{
  fetch("https://projecteuler.net")
  .then(res => res.text())
  .then(body => {
    let $ = cheerio.load(body);
    let content = $("div#about_page").text();
    res.render('index',{
      content:content
    })
  });
}


module.exports.get_problems_route = (req,res) =>{
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
}


module.exports.get_register_route = (req,res) =>{
  res.render("register");
}

module.exports.get_login_route = (req,res) =>{
  res.render("login");
}


module.exports.get_recent_route = (req,res) => {
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
}


module.exports.get_problems_page_route = (req,res) =>{
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
}

module.exports.get_problem_page_route = (req,res) =>{
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
}

module.exports.get_news_route = (req,res)=>{
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
}
