const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  first_name: String,
  last_name: String,
  phone: String,
  email: String,
});

module.exports = Client = mongoose.model("Client", ClientSchema);