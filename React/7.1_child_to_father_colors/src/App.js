import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [colorTo, setColorTo] = useState("Red");
  const colors = ["blue", "red", "yellow"];

  const insertColors = () => {
    return colors.map((color) => (
      <Button colorProp={color} setColor={setColorTo} />
    ));
  };
  return (
    <div>
      {insertColors()}
      <h4>{colorTo}</h4>
    </div>
  );
}

export default App;
