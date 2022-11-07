import React from "react";
import "./BoxAndButton.css";

function BoxAndButton({ clickHandle, val }) {
  return (
    <div className="main">
      <button onClick={clickHandle} type="button">
        Button
      </button>
      <div className={val ? "box" : "hide"}></div>
    </div>
  );
}

export default BoxAndButton;
