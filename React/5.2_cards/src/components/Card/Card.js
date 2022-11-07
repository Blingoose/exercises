import React from "react";
import "./Card.css";
import CardTop from "./CardTop";
import CardBottom from "./CardBottom";

function Card({ card }) {
  const [img] = card;
  return (
    <div className="card">
      <CardTop image={img}></CardTop>
      <CardBottom card={card}></CardBottom>
    </div>
  );
}

export default Card;
