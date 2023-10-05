const express = require("express");
const router = express.Router();
const session = require("express-session");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const Contact = require("../models/contactModel");
const Register = require("../models/registerModel");
const app = express();

//express-session
router.use(
  session({
    secret: "SpArKs", //create a secret key
    resave: false,
    saveUninitialized: true,
  })
);

router.post(
  "/signup",
  [
    // Validate password: minimum 8 characters
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    // Other validation rules for username and email
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email address"),
  ],
  async (req, res) => {
    //checking for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Extracting data from the form request body
    const { username, email, password } = req.body;

    try {
      // checking if user is already registered

      const existingUser = await Register.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "User already registered..." });
      }

      //Hashing the password for security purposes
      const hashbrownPassword = await bcrypt.hash(password, 10);

      //Creating the user
      const newAdministrator = new Register({
        username,
        email,
        password: hashbrownPassword,
      });

      //saving info to database
      await newAdministrator.save();

      res.status(201).json({ message: "Success" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error..." });
    }
  }
);

router.post("/contact", async (req, res) => {
  try {
    const { username, email, number, message } = req.body;

    const newContact = new Contact({
      username,
      email,
      number,
      message,
    });
    await newContact.save();

    res.status(201).json({ message: "Form Submitted..." });
  } catch (error) {
    console.log(error);
    console.error("Error saving contact:", error);

    res.status(500).json({ message: "Server Error..." });
  }
});

module.exports = router;
