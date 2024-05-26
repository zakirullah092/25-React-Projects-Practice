import Accordion from "./Components/Accordion/Accordion";
import './App.css';
import RandomColor from "./Components/RandomColorGenerator/RandomColor";
import StarRating from "./Components/StarRating/StarRating";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import QRCodeGenerator from "./Components/QRCodeGenerator/QRCodeGenerator";
import TreeNode from "./Components/Menu Tree/TreeNode"; // Removed space
import ThemeChanger from "./Components/ThemeChange/ThemeChanger";
import Tab from "./Components/Tabs/Tab";
import ScrollIndicator from "./Components/ScrollIndicator/ScrollIndicator";
import LoadMorePosts from "./Components/LoadMoreButton/LoadMorePosts"; // Adjusted path
import Modal from "./Components/Modal/Modal";
import BackToTopButton from "./Components/BackToTopBtn/BackToTopButton";

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
      <LoadMorePosts />
      <Modal />
      <BackToTopButton />
    </div>
  );
}

export default App;
