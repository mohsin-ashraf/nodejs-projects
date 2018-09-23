const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const express = require("express");
const dburl = "mongodb://localhost:27017/commentsfunctionality";
const Comment = require("./model/Comment")
mongoose.connect(dburl);
const db = mongoose.connection;

const port = 3000;
const app = express();


// body-parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Setting up view engine
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

// Setting up static path public
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res,next)=>{
	Comment.find({}).then((result)=>{
		res.render("index",{
			title:"Index Page",
			comments:result
		});
	});
});

app.get("/edit/:id",(req,res,next)=>{
	console.log(req.params.id);
	Comment.find({_id:req.params.id}).then(comment =>{
		comment = comment[0];
		const newComment = {
			subject:comment.subject,
			auther:comment.auther,
			email:comment.email,
			commentBody:comment.commentBody,
			edit_id:req.params.id
		}
		console.log(newComment);
		res.render("edit",{
			title:"edit Page",
			newComment:newComment
		});
	});
	

}); 

app.post("/addComments", (req,res) => {
	const newComment = new Comment({
		subject : req.body.subject,
		auther 	: req.body.auther,
		email   : req.body.email,
		commentBody : req.body.comment
	})
	console.log(newComment);

	if (!(newComment.subject =='' || newComment.auther =='' || newComment.email =='' || newComment.commentBody =='' )){
		newComment.save();
	}
	res.redirect("/");
});

app.post("/delete-comment",(req,res,next)=>{
	console.log(req.body.id);
	Comment.remove({_id:req.body.id}, err => {
    	if (!err) {
		    console.log("Deleted Successfully");
		} else {
		    console.log("Error while deleting todo");
		}
 	});
	res.redirect("/");
});

app.post("/updateComment/:id",(req,res,next) => {
	console.log(req.body.email);
	Comment.findByIdAndUpdate({_id:req.params.id},{
		subject:req.body.subject,
		auther:req.body.auther,
		email:req.body.email,
		commentBody:req.body.comment
	},(err,data)=>{
		if (err){
			res.send(err);
		}else{
			res.redirect("/");
		}
	});
});

app.listen(port,()=>{
	console.log("Server is running on port: ",port);
});