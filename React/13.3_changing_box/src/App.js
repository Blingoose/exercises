import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const colors = [
    "blue",
    "green",
    "red",
    "purple",
    "grey",
    "pink",
    "orange",
    "violet",
  ];
  useEffect(() => {
    console.log(count);
    const timeOut = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 500);
    if (count === 5) {
      clearInterval(timeOut);
    }
    return () => {
      clearTimeout(timeOut);
    };
  });
  return (
    <div
      className={count < 5 ? "box" : `box ${"circle"}`}
      style={{ backgroundColor: colors[count] }}
    ></div>
  );
}

export default App;
