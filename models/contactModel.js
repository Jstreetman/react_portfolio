const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  //Objects
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  number: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
