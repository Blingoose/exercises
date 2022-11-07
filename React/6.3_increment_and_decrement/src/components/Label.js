import React from "react";
import "./Label.css";

function Label({ val }) {
  return (
    <div className="input">
      <div className={val > 0 ? "green" : val < 0 ? "red" : "black"}>
        {val}
        {console.log(val)}
      </div>
    </div>
  );
}

export default Label;
