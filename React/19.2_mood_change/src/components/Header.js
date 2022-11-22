import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "../App";

const Header = () => {
  const { isDay, setIsDay } = useContext(themeContext);
  const changeMode = () => {
    return setIsDay((prev) => !prev);
  };
  console.log(isDay);
  return (
    <div>
      <button onClick={changeMode}>{isDay ? "Night" : "Day"}</button>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Header;
