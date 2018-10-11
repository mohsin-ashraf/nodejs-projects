const mongoose = require("mongoose");

const BusinessSchema = mongoose.Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  website: {
    type: String
  },
  phone: {
    type: String
  },
  street: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  }
});

module.exports = mongoose.model("business", BusinessSchema);