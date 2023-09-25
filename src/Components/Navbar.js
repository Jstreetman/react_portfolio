import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="nav" sx={{ flexGrow: 1 }}>
            Your App Name
          </Typography>
          {/* <Button component={Link} to="#" color="inherit">
            About
          </Button>
          <Button component={Link} to="#" color="inherit">
            Contact
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
