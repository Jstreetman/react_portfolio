const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");
const app = express();

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
