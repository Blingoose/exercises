import React from "react";
import "./Card.css";
import CardTop from "./CardTop";
import CardBottom from "./CardBottom";

function Card(props) {
  return (
    <div className="card">
      <CardTop card={props.card.img}></CardTop>
      <CardBottom card={props.card}></CardBottom>
    </div>
  );
}

export default Card;
