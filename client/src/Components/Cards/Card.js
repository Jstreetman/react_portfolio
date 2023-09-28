import CardDetails from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Topography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardContentDetails from "./CardContents";
import "bootstrap/dist/css/bootstrap.css";
import "../Showcase.css";

function Card(props) {
  return (
    <section className="p-5 " id="projects">
      <div className="container">
        {" "}
        <CardDetails
          className="card border-dark bg-dark"
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.image}
              alt={props.alt}
            />
            <CardContentDetails></CardContentDetails>
          </CardActionArea>
          <CardActions className="d-flex justify-content-center">
            <Button size="small" variant="contained" color="secondary">
              Source Code
            </Button>
          </CardActions>
        </CardDetails>
      </div>
    </section>
  );
}
export default Card;
