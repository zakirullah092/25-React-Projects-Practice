import Accordion from "./Components/Accordion/Accordion";
import './App.css';
import RandomColor from "./Components/RandomColorGenerator/RandomColor";
import StarRating from "./Components/StarRating/StarRating";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import QRCodeGenerator from "./Components/QRCodeGenerator/QRCodeGenerator";
import TreeNode from "./Components/Menu Tree/TreeNode";
import ThemeChanger from "./Components/ThemeChange/ThemeChanger";
import Tab from "./Components/Tabs/Tab";
import ScrollIndicator from "./Components/ScrollIndicator/ScrollIndicator";
import LoadMore from "./Components/LoadMoreButton/LoadMore";

function App() {
  return (
    <div>
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider />
      <QRCodeGenerator />
      <TreeNode />
      <ThemeChanger />
      <Tab />
      <ScrollIndicator />
      <LoadMore />
    </div>
  );
}

export default App;
