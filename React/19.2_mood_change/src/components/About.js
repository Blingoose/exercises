import React, { useContext } from "react";
import { themeContext } from "../App";

const About = () => {
  const { isDay } = useContext(themeContext);
  return <div className={isDay ? "day" : "night"}>About</div>;
};

export default About;
