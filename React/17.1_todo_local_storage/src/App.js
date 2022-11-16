import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import Input from "./components/Input";
import "./style/TodoDiv.css";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([].reverse());
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const dataToLS = JSON.stringify(todos);
    localStorage.setItem("taskArr", dataToLS);
  }, [todos]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const addToDo = () => {
    if (inputValue !== "") {
      setTodos((prev) => [...prev, { val: inputValue, done: false }]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    setTodos((prev) =>
      prev.filter((todo, i) => {
        return i !== index;
      })
    );
  };

  const handleUpdate = (index) => {
    // console.log(event.target.checked);
    setTodos((prev) => {
      return prev.map((todo, i) => {
        return i !== index ? todo : { ...todo, done: !todo.done };
      });
    });
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <Input ctrlValue={inputValue} handleChange={handleInput} />
        <AddButton addTodo={addToDo} />
        <h3 style={{ textAlign: "center" }}>Add To Do:</h3>
        {todos.map((todo, index) => (
          <div
            className={`todo-item ${todo.done ? "done" : "not"}`}
            key={todo.val + index}
            onClick={() => handleUpdate(index)}
          >
            <TodoItem task={todo.val} />
            <div>
              <DeleteButton
                handleDelete={() => handleDelete(index)}
                index={index}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
