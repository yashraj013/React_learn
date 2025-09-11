import Header from "./Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from "./components/JSXRules";
import Greeting from "./components/Greeting";
import ProductionInfo from "./components/ProductionInfo";
const App = () => {
  return <div>
    {/* WE CAN RENDER ANY OF THE COMPONENT HERE */}
      <Greeting/>
      <ProductionInfo/>

  </div>
};

export default App;