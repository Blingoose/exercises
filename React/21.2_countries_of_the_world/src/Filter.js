import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super();
  }

  render() {
    const insertCountries = () => {
      const filtered = this.props.countryArr.filter((country) => {
        return (
          country.name
            .toLowerCase()
            .includes(this.props.inputValue.toLowerCase()) ||
          !this.props.inputValue
        );
      });
      return filtered.map((item, i) => <p key={i}>{item.name}</p>);
    };
    return <>{insertCountries()}</>;
  }
}

export default Filter;
