const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
  },

  password: {
    type: String,
    required: false,
  },
});

const Register = mongoose.model("admin", registerSchema);

module.exports = Register;
