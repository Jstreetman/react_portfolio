import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { red } from "@mui/material/colors";
import "bootstrap/dist/css/bootstrap.css";
const primary = red[500];

function Navbar() {
  const handleClick = () => {
    window.location.href = "#projects";
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static">
        <ToolBar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit" onClick={handleClick}>
            Projects
          </Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </ToolBar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
