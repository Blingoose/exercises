import React from "react";
import { useState } from "react";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(props.checked);
  const changeHandler = () => {
    setIsChecked((prevVal) => !prevVal);
    // console.log(isChecked);
  };
  return (
    <div>
      <input onChange={changeHandler} type="checkbox" checked={isChecked} />
    </div>
  );
};

export default Checkbox;
