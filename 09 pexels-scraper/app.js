const express = require("express");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const path = require("path");

const port = 3000;
const app = express();

// Views middlewares...
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");

app.get("/",(req,res)=>{
  fetch(`https://www.pexels.com/?dark=true&page=2&format=js`)
  .then(result => result.text())
  .then(body =>{
    let $ = cheerio.load(body);
    let images = $('img');
    let imagesSrc = [];
    for (let i = 0 ; i < images.length ; i++){
        try{
          console.log($(images[i]).attr('srcset').replace('\\','').replace('"',''));
          imagesSrc.push($(images[i]).attr('srcset').replace('\\','').replace('"',''));
        }catch(err){
          console.log("error");
        }
    }
    console.log(imagesSrc.length);
    res.render("index",{
      images:imagesSrc,
      pageNumber:1
    })
  });
});

app.get("/:page_number",(req,res)=>{
  let page_number = parseInt(req.params.page_number)+1;
  fetch(`https://www.pexels.com/?dark=true&page=${page_number}&format=js`)
  .then(result => result.text())
  .then(body =>{
    let $ = cheerio.load(body);
    let images = $('img');
    let imagesSrc = [];
    console.log("Length of images array : ",images.length);
    for (let i = 0 ; i < images.length ; i++){
        try{
          console.log($(images[i]).attr('srcset').replace('\\','').replace('"',''));
          console.log("ALT OF THE IMAGE : ", $(images[i]).attr('alt'));
          imagesSrc.push($(images[i]).attr('srcset').replace('\\','').replace('"',''));
        }catch(err){
          console.log("error");
        }
    }
    console.log(imagesSrc.length);
    res.render("index",{
      images:imagesSrc,
      pageNumber:req.params.page_number
    })
  });
})

// Invalid routes
app.get("*",(req,res)=>{
  res.render("pageNotFound");
});

app.listen(port,()=>{
  console.log("Server is running on port ",port);
});