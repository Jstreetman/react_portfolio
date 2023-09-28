import Container from "@mui/material/Container";
import { Header } from "semantic-ui-react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "bootstrap/dist/css/bootstrap.css";
import "./Showcase.css";
import profile from "./images/showcaseavatar.svg";

function Showcase() {
  const handleClick = () => {
    window.location.href = "https://jrsportfolio.com";
  };
  return (
    <div>
      <section className="showcase  text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <Container>
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                <span className="text-warning">J</span>
                <span className="text-light">
                  streetman's
                  <span className="text-warning"> React Portfolio</span>
                </span>
              </h1>
              <p className="lead my-4">
                {" "}
                <span className="text-warning">FullStack</span>{" "}
              </p>
              <Button
                color="secondary"
                variant="outlined"
                target="_blank"
                onClick={handleClick}
                endIcon={<AccountCircleIcon />}
              >
                Visit My Website
              </Button>
            </div>
            <Avatar
              className="img-fluid rounded-circle h-25 w-25 d-none d-sm-block"
              src={profile}
              alt="profile"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
export default Showcase;
