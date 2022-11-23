import React, { Component } from "react";

export default class Map extends Component {
  constructor(props) {
    super();
  }

  render() {
    const fetchedData = () => {
      return this.props.countryArr.map((country, i) => (
        <p key={i}>{country.name}</p>
      ));
    };
    console.log(this.props.countryArr);

    return <div>{fetchedData()}</div>;
  }
}
