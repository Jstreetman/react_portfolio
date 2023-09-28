import { TextField, Button, Container, Stack, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";

import Header from "@mui/material/CardHeader";
import "bootstrap/dist/css/bootstrap.css";

function Contact() {
  return (
    <section className="p-5" id="contact">
      <div className="container">
        <Card className="bg-dark ">
          <Header title="Contact" className="text-center text-light"></Header>
        </Card>

        <Card className="p-5 ">
          <Form>
            <label className="text-dark mb-3">Name</label>
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Name"
              fullWidth
              name="name"
              required
            />
            <label className="text-dark mt-3">Email</label>
            <TextField
              className="mt-3"
              type="email"
              variant="outlined"
              color="primary"
              label="Email"
              fullWidth
              name="email"
              required
            />
            <label className="text-dark mt-3">Number</label>
            <TextField
              className="mt-3"
              type="number"
              variant="outlined"
              color="primary"
              label="Number"
              name="number"
              fullWidth
              required
            />
            <textarea
              className="mt-3 w-100"
              type="text"
              color="primary"
              name="message"
              placeholder="Message No more than 250 Characters"
              maxLength="250"
              required
            />
          </Form>
        </Card>
      </div>
    </section>
  );
}
export default Contact;
