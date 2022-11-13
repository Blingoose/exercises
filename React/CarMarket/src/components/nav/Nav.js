import React from "react";
import { stringChange } from "../../utils/carObject.utils";

function Nav(props) {
  const insertDepartments = () => {
    return (
      <ul>
        {props.title.map((item) => (
          <li key={item}>{stringChange(item)}</li>
        ))}
      </ul>
    );
  };
  return <nav>{insertDepartments()}</nav>;
}

export default Nav;
