import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Components/Themes/Themes";
import Register from "./Components/Admin/Register";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Register />,
  },

  {
    path: "/adminpanel",
    element: "",
  },

  {
    path: "/login",
    element: "",
  },
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
