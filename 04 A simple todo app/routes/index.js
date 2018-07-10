var express = require("express");
var router = express.Router();
var Todo = require("../models/todo");
/* GET home page. */
router.get("/", function(req, res, next) {
  Todo.find({}).exec((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { title: "Home", todos: results });
    }
  });
  // res.render("index", { title: "Home" });
});

router.post("/todo/add", (req, res) => {
  var title = req.body.title;
  var body = req.body.body;
  console.log(title);
  console.log(body);
  var todo = new Todo({ title: title, body: body });
  todo.save().then(() => {
    console.log("Successfully saved the todo.");
  });
  res.redirect("/");
});
router.get("/todo/delete/:id", (req, res) => {
  var id = req.params.id;
  console.log(id);
  Todo.remove({ _id: id }, err => {
    if (!err) {
      console.log("Deleted Successfully");
    } else {
      console.log("Error while deleting todo");
    }
  });
  res.redirect("/");
});
router.get("/todo/edit/:id", (req, res) => {
  var id = req.params.id;
  console.log(id);
  Todo.findById(id, (err, todo) => {
    res.render("edit", { title: "Edit Todo", todo: todo });
  });
});
router.post("/todo/update/:id", (req, res) => {
  var title = req.body.title;
  var body = req.body.body;
  var id = req.params.id;
  console.log("Title", title);
  console.log("body ", body);
  // var todo = { title: title, body: body };
  // var options = { multi: false };
  Todo.findByIdAndUpdate({ _id: id }, { title: title, body: body },(err,data)=>{
    if (!err){
      res.redirect("/");
    }else{
      res.send(err);
    }
  });
});
module.exports = router;
