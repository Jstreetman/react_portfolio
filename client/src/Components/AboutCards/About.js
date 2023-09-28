import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardBody from "@mui/material/CardContent";
import "bootstrap/dist/css/bootstrap.css";

function About(props) {
  //Edit as you see fit
  const cardDetails = [
    {
      title: "About",
      text: `Lorem ipsum dolor sit amet consectetur, 
      adipisicing elit. Neque corporis error maxime? 
      Quasi maxime nisi, dolores non, delectus
       aspernatur consequatur deserunt dolore,
        illum in laborum dolorum iusto nostrum 
        exercitationem perferendis? Ab praesentium,
         architecto iure debitis ut qui culpa ipsam at,
          earum dolores quo error minima officia sed, iusto vel. Sunt doloribus corporis magni
           tempora beatae in ab enim quae, quas quaerat veritatis deserunt temporibus id aperiam 
           mollitia, amet eveniet excepturi.`,
    },
  ];
  return (
    <div>
      <section className="p-5" id="about">
        <div className="container border-dark">
          <Card className="w-100">
            <CardHeader
              title={cardDetails[0].title}
              className="bg-dark text-light text-center"
            ></CardHeader>
            <CardBody>
              <p>{cardDetails[0].text}</p>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
}
export default About;
