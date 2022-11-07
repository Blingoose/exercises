import React from "react";
import "./CardBottom.css";

function CardBottom({ card }) {
  const [, title, description, link1, link2] = card;
  return (
    <div className="card-bottom">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link1}>Share</a>
      <a href={link2}>Explore</a>
    </div>
  );
}

export default CardBottom;
