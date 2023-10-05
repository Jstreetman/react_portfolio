import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import { Table, Button } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminFooter from "./AdminFooter";
import "bootstrap/dist/css/bootstrap.css";

function Panel() {
  function createData(name, username, email, number, message) {
    return { name, username, email, number, message };
  }
  // Check if contacts is an array before mapping

  return (
    <div>
      <AdminNavbar />

      <section className="p-5">
        <div className="container">
          <CardHeader
            title="Contacts"
            className="bg-dark text-light text-center"
          ></CardHeader>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id </TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Number</TableCell>
                  <TableCell align="right">Message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>

      <AdminFooter />
    </div>
  );
}

export default Panel;
