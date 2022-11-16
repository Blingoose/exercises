import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import Input from "./components/Input";
import "./style/TodoDiv.css";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(
    localStorage.todos ? JSON.parse(localStorage.todos) : []
  );

  useEffect(() => {
    const dataToLS = JSON.stringify(todos);
    localStorage.setItem("todos", dataToLS);
  }, [todos]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const addToDo = () => {
    if (inputValue !== "") {
      setTodos((prev) => [...prev, { val: inputValue, done: false }].reverse());
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    setTodos((prev) =>
      prev.filter((_, i) => {
        return i !== index;
      })
    );
  };

  const handleUpdate = (index) => {
    setTodos((prev) => {
      return prev.map((todo, i) => {
        return i !== index ? todo : { ...todo, done: !todo.done };
      });
    });
  };
  console.log(todos);
  return (
    <div className="todo-container">
      <div className="todo-box">
        <Input ctrlValue={inputValue} handleChange={handleInput} />
        <AddButton addTodo={addToDo} />
        <h2 style={{ textAlign: "center" }}>Add To Do:</h2>
        {todos.map((todo, index) => (
          <div
            className={`todo-item ${todo.done ? "done" : "not"}`}
            key={todo.val + index}
            onClick={() => handleUpdate(index)}
          >
            <div>
              {console.log(todo.done)}
              <TodoItem task={todo.val} />
            </div>
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
