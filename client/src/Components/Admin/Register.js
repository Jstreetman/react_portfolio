import React, { useState } from "react";
import Navbar from "../Navbar";
import { Card, TextField, Button, Typography } from "@mui/material";
import Header from "@mui/material/CardHeader";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/admin/signup",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setMessage("Sent!");
        // Clear form fields if registration is successful
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Navbar />
      <section className="p-5">
        <div className="container">
          <Card className="bg-dark">
            <Header
              title="Register"
              className="text-light text-center"
            ></Header>
          </Card>
          <form className="p-5 card" onSubmit={handleSubmit}>
            <TextField
              type="text"
              color="primary"
              label="Create Username..."
              fullWidth
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            ></TextField>
            <TextField
              type="email"
              color="primary"
              label="Email..."
              fullWidth
              name="email"
              className="mt-3"
              value={formData.email}
              onChange={handleChange}
              required
            ></TextField>
            <TextField
              className="mt-3"
              type="password"
              required
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleChange}
              color="primary"
              label="Create Password..."
            ></TextField>

            <Button type="submit" variant="contained" className="mt-3">
              Register
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
export default Register;
