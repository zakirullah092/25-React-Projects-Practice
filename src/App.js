import Accordion from "./Components/Accordion/Accordion";
import './App.css';
import RandomColor from "./Components/RandomColorGenerator/RandomColor";
import StarRating from "./Components/StarRating/StarRating";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import QRCodeGenerator from "./Components/QRCodeGenerator/QRCodeGenerator";

function App() {
  return (
    <div>
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider />
      <QRCodeGenerator/>
    </div>
  );
}

export default App;
