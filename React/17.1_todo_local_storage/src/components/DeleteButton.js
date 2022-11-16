import React from "react";

function DeleteButton({ handleDelete, index }) {
  const deleteTodo = () => {
    return handleDelete(index);
  };
  return <button onClick={deleteTodo}>Delete</button>;
}

export default DeleteButton;
