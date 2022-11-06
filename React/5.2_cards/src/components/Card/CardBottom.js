import React from "react";
import "./CardBottom.css";

function CardBottom(props) {
  return (
    <div className="card-bottom">
      <h2>{props.card.title}</h2>
      <p>{props.card.description}</p>
      <a href={props.card.link1}>Share</a>
      <a href={props.card.link2}>Explore</a>
    </div>
  );
}

export default CardBottom;
