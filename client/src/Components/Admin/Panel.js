import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import AdminFooter from "./AdminFooter";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

function Panel() {
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data using Axios
    axios
      .get("/api/users")
      .then((response) => {
        if (!response.data) {
          throw new Error("Error fetching user data");
        }
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error Fetching user:", error.message);
        setError("Error fetching user data");
      });

    axios
      .get("/api/users/posts")
      .then((response) => {
        if (!response.data) {
          throw new Error("Error fetching contacts data");
        }
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error.message);
        setError("Error fetching contacts data");
      });

    // Fetch contacts data using Axios
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      // Implement logic to delete the post with the given postId
      const response = await axios.delete(`/api/users/posts/${postId}`);

      if (response.status === 200) {
        setMessage("Post Deleted Successfully!");

        // Refetch the updated list of contacts after successful deletion
        axios
          .get("/api/users/posts")
          .then((response) => {
            if (!response.data) {
              throw new Error("Error fetching contacts data");
            }
            setContacts(response.data);
          })
          .catch((error) => {
            console.error("Error fetching contacts:", error.message);
            setError("Error fetching contacts data");
          });
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (error) {
    return (
      <div>
        <AdminNavbar />
        <section className="p-5">
          <div className="container">
            <Typography
              variant="h4"
              component="div"
              className="bg-danger text-light text-center p-3"
            >
              {error}
            </Typography>
          </div>
        </section>
        <AdminFooter />
      </div>
    );
  }

  return (
    <div>
      <AdminNavbar />
      <section className="p-5">
        <div className="container">
          <Typography
            variant="h4"
            component="div"
            className="bg-dark text-light text-center p-3"
          >
            Contacts
          </Typography>
          <Paper elevation={3} className="p-3">
            <List>
              {Array.isArray(contacts) &&
                contacts.map((contact) => (
                  <ListItem key={contact._id}>
                    <ListItemText
                      primary={contact.username}
                      secondary={`Email: ${contact.email}, Number: ${contact.number}, Message: ${contact.message}`}
                    />
                    <Button
                      onClick={() => handleDeletePost(contact._id)}
                      variant="contained"
                      color="error" // Set the button color to red
                    >
                      Delete
                    </Button>
                  </ListItem>
                ))}
            </List>
          </Paper>
        </div>
      </section>
      <AdminFooter />
    </div>
  );
}

export default Panel;
