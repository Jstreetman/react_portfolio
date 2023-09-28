import React, { useState, useEffect } from "react";
import { Card, Container, TextField, Button, Typography } from "@mui/material";
import Header from "@mui/material/CardHeader";
import axios from "axios";

function Contact() {
  useEffect(() => {
    const textArea = document.getElementById("message");
    const charCount = document.getElementById("charCount");
    const maxChars = 500; // Set your desired maximum character limit
    // Get the input element by its ID
    var numberInput = document.getElementById("number");
    // Add an event listener to the input element
    numberInput.addEventListener("input", function () {
      // Remove any non-numeric characters
      this.value = this.value.replace(/[^0-9]/g, "");

      // Limit the input to a maximum of 10 characters
      if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
      }
    });
    textArea.addEventListener("input", () => {
      const currentChars = textArea.value.length;
      charCount.textContent = `${currentChars} / ${maxChars}`;

      if (currentChars > maxChars) {
        textArea.value = textArea.value.slice(0, maxChars); // Truncate input
      }
    });
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/admin/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setMessage("Sent!");
        // Clear form fields if registration is successful
        setFormData({
          username: "",
          email: "",
          number: "",
          message: "",
        });
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <section className="p-5" id="contact">
      <div className="container">
        <Card className="bg-dark ">
          <Header title="Contact" className="text-center text-light" />
        </Card>

        <form className="p-5 card">
          <form onSubmit={handleSubmit} error={!!message}>
            <TextField
              type="text"
              color="primary"
              label="Name"
              fullWidth
              onChange={handleChange}
              name="username"
              value={formData.username}
              required
            />
            <TextField
              className="mt-3"
              type="email"
              onChange={handleChange}
              value={formData.email}
              label="Email"
              fullWidth
              name="email"
              required
            />
            <TextField
              className="mt-3"
              type="number"
              label="Number"
              onChange={handleChange}
              value={formData.number}
              name="number"
              id="number"
              fullWidth
              required
            />

            <TextField
              className="mt-3  border-dark"
              type="text"
              color="primary"
              multiline
              rows={4}
              id="message"
              onChange={handleChange}
              value={formData.message}
              name="message"
              label="Message"
              placeholder="Message..."
              fullWidth
              variant="outlined"
              required
            />
            <Typography id="charCount">0 / 500</Typography>
            <Button
              className="btn mt-3 bg-dark text-light container-fluid"
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </form>
          {message && <Typography color="error">{message}</Typography>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
