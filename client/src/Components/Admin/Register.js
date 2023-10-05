import React, { useState } from "react";
import Navbar from "../Navbar";
import { Card, TextField, Button, Typography } from "@mui/material";
import Header from "@mui/material/CardHeader";
import "bootstrap/dist/css/bootstrap.css";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
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
              type="email"
              color="primary"
              label="Email"
              fullWidth
              name="email"
              onChange={handleChange}
              required
            ></TextField>
            <TextField
              className="mt-3"
              type="password"
              required
              fullWidth
              onChange={handleChange}
              color="primary"
              label="Password"
            ></TextField>

            <Button
              className="btn mt-3 bg-dark text-light container-fluid"
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
export default Register;
