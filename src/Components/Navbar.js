import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { red } from "@mui/material/colors";
import "bootstrap/dist/css/bootstrap.css";
const primary = red[500];

function Navbar() {
  return (
    <AppBar color="primary">
      <ToolBar>
        <Typography color="secondary">Welcome</Typography>
      </ToolBar>
    </AppBar>
  );
}
export default Navbar;
