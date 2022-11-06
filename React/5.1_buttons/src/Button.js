import React from "react";

function Button(props) {
  return (
    <button style={{ fontWeight: props.btnStyle, marginRight: "20px" }}>
      {props.value}
    </button>
  );
}

export default Button;

// function Button(props) {
// return <button style={{ background: props.color }}>Button</button>;
//   //   return <button className={props.color}>Button</button>;
// return <button style={props.myStyle}>Button</button>;
//   return <button>Button</button>;
// }
