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
      <Card image={cardInfo[0].image} alt={cardInfo[0].alt} />
      <Card image={cardInfo[0].image} alt={cardInfo[0].alt} />
      <Card image={cardInfo[0].image} alt={cardInfo[0].alt} />
    </div>
  );
}

export default App;
