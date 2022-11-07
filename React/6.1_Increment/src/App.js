import React from "react";
import "./App.css";
import Button from "./components/Button";
import Label from "./components/Label";

function App() {
  const [value, setValue] = React.useState(0);
  const increment = () => {
    setValue(value + 1);
  };
  return (
    <div className="App">
      <Button increment={increment}>Increment</Button>
      <Label>{value}</Label>
    </div>
  );
}

export default App;
