import CardContentDetails from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CardContent(props) {
  <CardContentDetails>
    <Typography variant="h5" component="div">
      <p>{props.name}</p>
    </Typography>
    <Typography variant="body2" color="text.secondary">
      <p>{props.description}</p>
    </Typography>
  </CardContentDetails>;
}
export default CardContent;
