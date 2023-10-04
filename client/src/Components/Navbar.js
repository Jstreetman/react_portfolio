import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Hidden from "@mui/material/Hidden";

import { red } from "@mui/material/colors";
import "bootstrap/dist/css/bootstrap.css";
const primary = red[500];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="#projects">
              Projects
            </Button>
            <Button color="inherit" href="#about">
              About
            </Button>
            <Button color="inherit" href="#contact">
              Contact
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
              href="#"
              fullWidth
              onClick={closeMobileMenu}
            >
              Home
            </Button>
            <Button
              color="inherit"
              href="#projects"
              fullWidth
              onClick={closeMobileMenu}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              href="#about"
              fullWidth
              onClick={closeMobileMenu}
            >
              About
            </Button>
            <Button
              color="inherit"
              href="#contact"
              fullWidth
              onClick={closeMobileMenu}
            >
              Contact
            </Button>
          </div>
        )}
      </Hidden>
    </div>
  );
}

export default Navbar;
