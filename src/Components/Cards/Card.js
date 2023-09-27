import CardDetails from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardContentDetails from "./CardContent";
import "bootstrap/dist/css/bootstrap.css";
import "../Showcase.css";

function Card(props) {
  return (
    <section className="p-5 " id="projects">
      <CardDetails className="card border-dark" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt={props.alt}
          />
          <CardContentDetails />
        </CardActionArea>
        <CardActions>
          <Button size="small" variant="contained" color="secondary">
            Source Code
          </Button>
        </CardActions>
      </CardDetails>
    </section>
  );
}
export default Card;
