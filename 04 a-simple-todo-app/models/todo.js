const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var todoSchema = new Schema({
  title: String,
  body: String
});

var Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
