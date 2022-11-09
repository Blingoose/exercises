import React from "react";
import styles from "./Button.module.css";

const Button = ({ colorProp, setColor }) => {
  const clickHandle = () => setColor(colorProp);

  return (
    <button className={styles[colorProp]} onClick={clickHandle}>
      {colorProp}
    </button>
  );
};

export default Button;
