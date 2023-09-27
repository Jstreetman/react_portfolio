import CardContentDetails from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.css";

function CardContents() {
  return (
    <CardContentDetails>
      <Typography variant="h5" component="div" className="text-light">
        Project Name
      </Typography>
      <Typography variant="body2" className="text-light">
        Project Description
      </Typography>
    </CardContentDetails>
  );
}
export default CardContents;
