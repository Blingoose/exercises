import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const boxes = [
    { width: 100, height: 100, color: "black", left: "-200px" },
    { width: 200, height: 200, color: "green", left: "-300px" },
    { width: 400, height: 400, color: "blue", left: "-400px" },
  ];
  const [time, setTime] = useState(1000);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const abc = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log(count);
    }, time);
    if (count === 5) {
      clearInterval(abc);
      setTime(false);
    }
    return () => {
      clearInterval(abc);
    };
  }, [time, count]);

  return (
    <div>
      {boxes.map((_, i) => (
        <div
          key={i}
          style={{
            width: boxes[i].width,
            height: boxes[i].height,
            backgroundColor: boxes[i].color,
            position: "relative",
            left: boxes[i].left,
          }}
          className={count && time ? `box1` : ""}
        ></div>
      ))}
    </div>
  );
}

export default App;
