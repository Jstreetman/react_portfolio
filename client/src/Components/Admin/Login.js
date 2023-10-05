import React from "react";
import Navbar from "../Navbar";
import { Card, TextField, Button } from "@mui/material";
import Header from "@mui/material/CardHeader";
import "bootstrap/dist/css/bootstrap.css";

function Login() {
  return (
    <div>
      <Navbar />
      <section className="p-5">
        <div className="container">
          <Card className="bg-dark">
            <Header title="Login" className="text-light text-center"></Header>
          </Card>
          <form className="p-5 card">
            <TextField
              name="username"
              label="Username..."
              fullWidth
              required
              type="text"
              color="primary"
            ></TextField>
            <TextField
              type="password"
              name="password"
              fullWidth
              required
              label="Password..."
              color="primary"
              className="mt-3"
            ></TextField>

            <Button variant="contained" type="button" className="mt-3">
              Login
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
