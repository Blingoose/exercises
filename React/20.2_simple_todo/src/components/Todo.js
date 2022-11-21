import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
      ],
    };
  }

  printTodos = () => {
    return this.state.todoList.map((todo, i) => {
      return (
        <div onClick={() => this.handleTodos(i)} key={i}>
          <span
            style={{
              textDecoration: `${
                this.state.todoList[i].completed ? "line-through" : "none"
              }`,
            }}
          >
            {todo.name}
          </span>
          {todo.completed ? " V" : " X"}
        </div>
      );
    });
  };

  handleTodos(i) {
    this.setState((prev) => {
      return prev.todoList.map((todo, index) => {
        return index !== i
          ? todo[i]
          : { completed: (todo.completed = !todo.completed) };
      });
    });
  }

  render() {
    return <div>{this.printTodos()}</div>;
  }
}

export default Todo;
