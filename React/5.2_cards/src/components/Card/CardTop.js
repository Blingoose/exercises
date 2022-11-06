import React from "react";
import "./CardTop.css";

function CardTop(props) {
  return (
    <div
      className="card-top"
      style={{
        backgroundImage: `url(${props.card})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default CardTop;
