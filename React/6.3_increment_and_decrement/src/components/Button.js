import React from "react";

function Button({ clickHandler, children }) {
  return (
    <div>
      <button onClick={clickHandler} type="button">
        {children}
      </button>
    </div>
  );
}

export default Button;
