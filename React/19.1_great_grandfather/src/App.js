import React, { createContext, useContext, useEffect, useState } from "react";
import "./App.css";

const giftsContext = createContext();

//-------------
function App() {
  const [gifts, setGifts] = useState([]);
  return (
    <giftsContext.Provider value={{ gifts, setGifts }}>
      <div className="App">
        <GrandFather />
      </div>
    </giftsContext.Provider>
  );
}
export default App;

//-------------
function GrandFather() {
  return (
    <div>
      <Father />
    </div>
  );
}

//-------------
function Father() {
  const { setGifts } = useContext(giftsContext);
  const arrOfGifts = ["Xbox", "Candies", "Cash", "Book"];

  useEffect(() => {
    setGifts(() => [...arrOfGifts]);
  }, []);
  return (
    <div>
      <Son />
    </div>
  );
}

//-------------
function Son() {
  return (
    <div>
      <GrandSon />
    </div>
  );
}

//-------------
function GrandSon() {
  const { gifts } = useContext(giftsContext);
  return (
    <>
      {gifts.map((gift, i) => (
        <p key={i}>{gift}</p>
      ))}
    </>
  );
}
