import React from "react";

function Input({ handleChange, ctrlValue }) {
  return <input value={ctrlValue} onChange={handleChange} type="text"></input>;
}

export default Input;
