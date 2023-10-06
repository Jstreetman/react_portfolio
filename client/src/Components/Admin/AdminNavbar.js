import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Hidden from "@mui/material/Hidden";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

function AdminNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      // Send a request to the server to destroy the session
      await axios.get("/api/users/logout");

      // Remove any local storage items or tokens related to authentication
      localStorage.removeItem("your key here");

      // Redirect to the login page
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Hidden smDown>
            {/* Render these buttons on larger screens */}
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Hidden>
          <Hidden mdUp>
            {/* Render the menu icon on smaller screens */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileMenu}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        {/* Render a dropdown menu on smaller screens */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: "white",
              position: "absolute",
              top: "64px", // Adjust the top position based on your AppBar height
              right: "0",
              zIndex: "1000",
              border: "1px solid #ccc",
            }}
          >
            <Button
              color="inherit"
              href="/logout"
              fullWidth
              onClick={closeMobileMenu}
            >
              Logout
            </Button>
          </div>
        )}
      </Hidden>
    </div>
  );
}

export default AdminNavbar;
