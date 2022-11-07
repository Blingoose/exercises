import React from "react";
import "./App.css";
import Button from "./components/Button";
import Label from "./components/Label";

function App() {
  const [value, setValue] = React.useState(0);

  const decrement = () => {
    value < -9 ? removeEvent() : setValue((prevValue) => prevValue - 1);
  };

  const increment = () => {
    value > 9 ? removeEvent() : setValue((prevValue) => prevValue + 1);
  };

  function removeEvent() {
    if (value > 0) {
      window.removeEventListener("click", increment);
    }
    window.removeEventListener("click", decrement);
  }

  return (
    <div className="App">
      <Button clickHandler={increment}>{"increment"}</Button>
      <Button clickHandler={decrement}>{"decrement"}</Button>
      <Label val={value}></Label>
    </div>
  );
}

export default App;
