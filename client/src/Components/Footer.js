import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.css";

const footerStyle = {
  position: "absolute",
  width: "100%",
  textAlign: "center",
};

function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    if (windowHeight + scrollY >= documentHeight) {
      setIsFooterVisible(true);
    } else {
      setIsFooterVisible(false);
    }
  };

  return (
    <AppBar
      position="static"
      color="primary"
      style={{ ...footerStyle, display: isFooterVisible ? "block" : "none" }}
    >
      <Toolbar className="d-flex justify-content-center">
        <Typography variant="body1" color="inherit">
          &copy; {new Date().getFullYear()} Jstreetman
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
