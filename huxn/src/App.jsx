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

const App = () => {
  return <div>
    {/* WE CAN RENDER ANY OF THE COMPONENT HERE */}
      
      <Weather/>
      <Greeting/>
  </div>
};

export default App;