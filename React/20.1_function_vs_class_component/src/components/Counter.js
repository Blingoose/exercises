import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  handleClick = (e) => {
    // console.log(e.target.textContent);
    const addToCounter = e.target.id === "inc" ? 1 : -1;
    const futureCounter = this.state.counter + addToCounter;
    if (futureCounter <= 10 && futureCounter >= -10) {
      this.setState((prevState) => {
        return { counter: prevState.counter + addToCounter };
      });
    }
  };

  setColorClass = (counterValue) => {
    if (counterValue > 0) return "green";
    else if (counterValue < 0) return "red";
    else return "black";
  };

  render() {
    return (
      <div>
        <button id="inc" onClick={this.handleClick}>
          Increment
        </button>
        <button onClick={this.handleClick}>Decrement</button>
        <h1 style={{ color: `${this.setColorClass(this.state.counter)}` }}>
          {this.state.counter}
        </h1>
      </div>
    );
  }
}

export default Counter;
