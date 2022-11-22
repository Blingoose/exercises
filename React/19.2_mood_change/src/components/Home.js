import React, { useContext } from "react";
import { themeContext } from "../App";
import "../App.css";

const Home = () => {
  const { isDay } = useContext(themeContext);
  return <div className={isDay ? "day" : "night"}>Home</div>;
};

export default Home;
