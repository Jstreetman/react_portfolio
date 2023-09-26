import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121", // Set the primary color
    },
    secondary: {
      main: "#fff", // Set the secondary color
    },
  },
  typography: {
    // Customize typography settings
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
