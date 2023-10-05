const express = require("express");
const router = express.Router();
const session = require("express-session");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const Contact = require("../models/contactModel");
const Register = require("../models/registerModel");

//express-session
router.use(
  session({
    secret: "SpArKs", //create a secret key
    resave: false,
    saveUninitialized: true,
  })
);

const requireLogin = (req, res, next) => {
  if (req.session.user) {
    //if user is logged in proceed to next middleware
    next();
  } else {
    res.redirect("/login");
  }
};

router.get("/adminpanel", requireLogin);

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

router.post(
  "/signin",
  [
    body("email").isEmail().withMessage("Invalid Email..."),
    body("password").notEmpty().withMessage("Password is required..."),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array });
    }
    const { email, password } = req.body;

    try {
      //check if email exists in the database

      const user = await Register.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      //make sure the password is valid
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      //if all is valid proceed
      req.session.user = user;
      req.session.username = user.username;
      req.session.email = user.email;

      res.status(200).json({ message: "Login Successful", user });
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

router.get("/adminpanel", (req, res) => {
  if (!req.session.user) {
    res.redirect("/login");
  }
});

router.get("/logout", (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    } else {
      // Redirect to a login page or any other appropriate page after logout
      res.redirect("/login"); // Change the route as needed
    }
  });
});

module.exports = router;
