import React, { useState, useEffect } from "react";
import { TextField, Container, Stack, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

import Header from "@mui/material/CardHeader";
import "bootstrap/dist/css/bootstrap.css";

function Contact() {
  const [formData, setFormData] = useState({});
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
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="p-5" id="contact">
      <div className="container">
        <Card className="bg-dark ">
          <Header title="Contact" className="text-center text-light"></Header>
        </Card>

        <Card className="p-5 ">
          <Form action="POST" onSubmit={handleSubmit}>
            <label className="text-dark mb-3">Name</label>
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Name"
              fullWidth
              name="name"
              required
            />
            <label className="text-dark mt-3">Email</label>
            <TextField
              className="mt-3"
              type="email"
              variant="outlined"
              color="primary"
              label="Email"
              fullWidth
              name="email"
              required
            />
            <label className="text-dark mt-3">Number</label>
            <TextField
              className="mt-3"
              type="number"
              variant="outlined"
              color="primary"
              label="Number"
              name="number"
              id="number"
              fullWidth
              required
            />
            <label className="text-dark mt-3">Message</label>

            <textarea
              className="mt-3 w-100 form-control border-dark"
              type="text"
              color="primary"
              cols="20"
              rows="4"
              id="message"
              name="message"
              placeholder="Message..."
              maxLength="500"
              required
            />
            <span id="charCount">0 / 500</span>
          </Form>
          <Button className="btn mt-3 bg-dark text-light" type="submit">
            Submit
          </Button>
        </Card>
      </div>
    </section>
  );
}
export default Contact;
