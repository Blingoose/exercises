import "./App.css";
import { carMarket } from "../carsAgObj";
import Nav from "./nav/Nav";

function App() {
  return (
    <div>
      <Nav title={Object.keys(carMarket)} />;
    </div>
  );
}

export default App;
