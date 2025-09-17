import Header from "./Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from "./components/JSXRules";
import Greeting from "./components/Greeting";
import ProductionInfo from "./components/ProductionInfo";
import Properties from "./components/Properties";
import Product from "./components/Product";
import Weather from "./components/Weather";
import StyleCard from "./components/StyleCard";
import ProfileCard from "./components/ProfileCard";
import Icon from "./components/Icon";

const App = () => {
  return <div>
    {/* WE CAN RENDER ANY OF THE COMPONENT HERE */}
      <StyleCard/>
      <ProfileCard/>
      <Icon/>
  </div>
};

export default App;