import React from "react";

function DeleteButton({ handleDelete, index }) {
  const deleteTodo = (e) => {
    e.stopPropagation();
    return handleDelete(e, index);
  };
  return <button onClick={deleteTodo}>Delete</button>;
}

export default DeleteButton;
