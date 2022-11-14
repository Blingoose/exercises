import React from "react";
import "./Avatar.css";

function Avatar(props) {
  return (
    <div className="card-container">
      <div className={"card"}>
        <img className={"img"} src={`${props.personData.img}`} alt="face" />
        <p>{props.personData.name}</p>
      </div>
    </div>
  );
}

export default Avatar;
