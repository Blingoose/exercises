import React from "react";

function Button({ increment }) {
  return (
    <button type="button" onClick={increment}>
      Button
    </button>
  );
}

export default Button;
