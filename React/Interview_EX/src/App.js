import "./App.css";
import React, { useState, useEffect, createContext } from "react";

import dataJson from "./assets/data.json";
import Map from "./components/Map";

export const sendContext = createContext();

function App() {
  const [itemData, setItemData] = useState();
  const [ascending, setAscending] = useState(false);

  useEffect(() => {
    setItemData(dataJson.map((prev) => prev.name));
    if (ascending) {
      setItemData((prev) => prev.sort());
    } else {
      setItemData((prev) => prev.sort().reverse());
    }
  }, [ascending]);

  const handleSort = () => {
    setAscending((prev) => !prev);

    console.log(ascending);
  };
  console.log(itemData);

  return (
    <div className="App">
      <button onClick={handleSort}>Sort</button>
      <sendContext.Provider value={{ itemData }}>
        {<Map />}
      </sendContext.Provider>
    </div>
  );
}

export default App;
