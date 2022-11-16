import React from "react";

function TodoItem({ task, classN, update, index }) {
  return (
    <div>
      <h3>{task}</h3>
    </div>
  );
}

export default TodoItem;
