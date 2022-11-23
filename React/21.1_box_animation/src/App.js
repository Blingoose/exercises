import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.intervalID = 0;
    this.boxes = [
      { width: 100, height: 100, color: "black", left: "-400px" },
      { width: 200, height: 200, color: "green", left: "-400px" },
      { width: 400, height: 400, color: "blue", left: "-400px" },
    ];

    this.state = {
      time: 1000,
      count: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((prev) => {
        return { count: (prev.count = 1) };
      });
    }, this.state.time);
  }

  componentDidUpdate(_, prevState) {
    if (this.state.count > 4 && prevState.count !== this.state.count) {
      console.log("Hey!!!");
      clearInterval(this.intervalID);
      this.setState((prev) => {
        return { time: (prev.time = false) };
      });
    }
  }

  render() {
    const handleBox = () => {
      clearInterval(this.intervalID);
      this.intervalID = setInterval(() => {
        this.setState((prev) => {
          return { count: prev.count + 1 };
        });
        console.log(this.state.count);
      }, 1000);
    };
    return (
      <div>
        {this.boxes.map((_, i) => (
          <div
            key={i}
            style={{
              width: this.boxes[i].width,
              height: this.boxes[i].height,
              backgroundColor: this.boxes[i].color,
              position: "relative",
              left: this.boxes[i].left,
            }}
            className={this.state.count && this.state.time ? `box1` : ""}
            onAnimationEnd={handleBox}
          ></div>
        ))}
      </div>
    );
  }
}

export default App;
