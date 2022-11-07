import React from "react";
import "./CardTop.css";

function CardTop({ image }) {
  return (
    <div
      className="card-top"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default CardTop;
