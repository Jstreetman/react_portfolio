import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import { Card, TextField, Button } from "@mui/material";
import Header from "@mui/material/CardHeader";
import AdminFooter from "./AdminFooter";
import "bootstrap/dist/css/bootstrap.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/signin", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setMessage("Login successful!");
        setFormData({
          email: "",
          password: "",
        });

        // Redirect to /adminpanel after a delay
        setTimeout(() => {
          navigate("/adminpanel");
        }, 1000);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <section className="p-5">
        <div className="container">
          <Card className="bg-dark">
            <Header title="Login" className="text-light text-center"></Header>
          </Card>
          <form className="p-5 card" onSubmit={handleSubmit}>
            <TextField
              name="email"
              label="Email..."
              fullWidth
              required
              value={formData.email}
              type="email"
              onChange={handleChange}
              color="primary"
            ></TextField>
            <TextField
              type="password"
              name="password"
              fullWidth
              value={formData.password}
              required
              label="Password..."
              onChange={handleChange}
              color="primary"
              className="mt-3"
            ></TextField>

            <Button variant="contained" type="submit" className="mt-3">
              Login
            </Button>
          </form>
        </div>
      </section>
      <AdminFooter />
    </div>
  );
}

export default Login;
