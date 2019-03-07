const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeaSchema = Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model("ideas", IdeaSchema);