import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import "./App.css";

export const themeContext = createContext();

function App() {
  const [isDay, setIsDay] = useState(false);
  return (
    <div className="App">
      <themeContext.Provider value={{ isDay, setIsDay }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </themeContext.Provider>
    </div>
  );
}

export default App;
