const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: false,
  },

  password: {
    type: String,
    required: false,
  },
});

const Register = mongoose.model("User", registerSchema);

module.exports = Register;
