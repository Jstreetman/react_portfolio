import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.css";

const footerStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
};

const textStyle = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
};

function AdminFooter() {
  return (
    <AppBar position="static" color="primary" style={footerStyle}>
      <Toolbar className="d-flex justify-content-center">
        <Typography className="text-center" variant="body1" color="inherit">
          &copy; {new Date().getFullYear()} Jstreetman
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AdminFooter;
