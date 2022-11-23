import { Component } from "react";
import axios from "axios";
import "./App.css";
import Map from "./Map";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      error: false,
      isLoading: false,
      switch: false,
    };
    this.abortController = new AbortController();
  }

  componentDidMount() {
    (async () => {
      this.setState({ isLoading: true });
      try {
        const { data } = await axios.get("https://restcountries.com/v2/all", {
          signal: this.abortController.signal,
        });
        this.setState((prev) => (prev.data = data));
      } catch (err) {
        this.setState({ error: err });
      }
      this.setState({ isLoading: false });
    })();
  }

  componentWillUnmount() {
    console.log("aborted");
    this.abortController.abort();
  }

  handleClick = () => {
    this.setState((prev) => ({ switch: !prev.switch }));
    console.log(this.state.switch);
  };

  printFunc() {
    if (this.state.error) {
      return <div>{this.state.error.message}</div>;
    } else {
      return (
        <div>
          {this.state.isLoading && <p>Loading...</p>}
          <Map countryArr={this.state.data} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Fetch</button>
        {this.state.switch && this.printFunc()}
      </div>
    );
  }
}

export default App;
