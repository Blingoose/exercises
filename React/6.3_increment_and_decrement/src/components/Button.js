import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.clickHandler} type="button" value={props.value}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
