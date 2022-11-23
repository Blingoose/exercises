import { Component } from "react";
import axios from "axios";
import Filter from "./Filter";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: false,
      isLoading: false,
      searchInput: "",
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      this.setState({ isLoading: true });
      try {
        const fetched = await axios.get("https://restcountries.com/v2/all");
        this.setState((prev) => (prev.data = fetched));
      } catch (err) {
        this.setState({ error: err });
      }
      this.setState({ isLoading: false });
    };
    fetchData();
  }

  handleInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  printFunc() {
    if (this.state.error) {
      return <div>{this.state.error.message}</div>;
    } else
      return (
        <Filter
          countryArr={this.state.data}
          inputValue={this.state.searchInput}
        />
      );
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleInput}></input>
        {this.state.isLoading && <p>Loading...</p>}
        {this.printFunc()}
      </div>
    );
  }
}

export default App;
