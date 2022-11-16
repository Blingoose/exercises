import React, { useState, useEffect } from "react";

function App() {
  const [taskArr, setTaskArr] = useState(JSON.parse(localStorage.taskArr));
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    const dataToLS = JSON.stringify(taskArr);
    localStorage.setItem("taskArr", dataToLS);
  }, [taskArr]);
  //! read localStorage and update the state

  const handleInput = ({ target: { value } }) => {
    setInputVal(value);
  };

  //! update localStorage
  //? Create
  const handleAddTask = () => {
    //! ↓↓↓↓↓↓↓ state is Async!!!!!
    //! no so very good practice ↓
    // const tempState = [...taskArr, { value: inputVal, done: false }];
    setTaskArr((prev) => [...prev, { value: inputVal, done: false }]);
    setInputVal("");
  };

  //! update localStorage
  //? Update
  const handleUpdate = (index) => {
    //?
    setTaskArr((prev) => {
      return prev.map((task, mapIndex) => {
        // mapIndex !== index ? task : { ...task, done: !task.done }
        if (mapIndex !== index) {
          return task;
        } else {
          task.done = !task.done;
          return task;
        }
      });
    });
  };

  //! update localStorage
  //? Delete
  const handleDelete = (index) => {
    setTaskArr((prevState) =>
      prevState.filter((task, mapIndex) => {
        return mapIndex !== index;
      })
    );
  };

  return (
    <div>
      <h1>Todo</h1>
      <input value={inputVal} onChange={handleInput} />
      <button onClick={handleAddTask}>Add Task</button>
      {/* //? Read */}
      {taskArr.map((task, mapIndex) => (
        <div key={task.value + mapIndex}>
          <h3
            onClick={() => {
              handleUpdate(mapIndex);
            }}
          >
            {task.value} - {task.done ? "V" : "X"}
          </h3>
          <button
            onClick={() => {
              handleDelete(mapIndex);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
