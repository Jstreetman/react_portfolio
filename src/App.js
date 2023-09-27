import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";
import Card from "./Components/Cards/Card";
import placeHolder from "./Components/images/placeholder.svg";

function App() {
  const cardInfo = [
    //Edit or add as you see fit
    {
      image: placeHolder,
      alt: "placeholder",
    },
  ];
  return (
    <div>
      <Navbar />
      <Showcase />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <Card image={cardInfo[0].image} alt={cardInfo[0].alt} />
          </div>
          <div className="col">
            <Card image={cardInfo[0].image} alt={cardInfo[0].alt} />
          </div>
          <div className="col">
            <Card image={cardInfo[0].image} alt={cardInfo[0].alt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
