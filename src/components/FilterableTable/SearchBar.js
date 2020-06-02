import React from "react";
import PropTypes from "prop-types";
export class SearchBar extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    // handleChange: PropTypes.func,
    // handleClick: PropTypes.func,
  };

  handleChange() {
    console.log("typing");
  }

  handleClick() {
    console.log("clicked");
  }

  render() {
    return (
      <form>
        <label htmlFor="search">search</label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={this.handleChange}
        />
        <div>
          {""}
          <label htmlFor="filter">filter</label>
          <input
            type="checkbox"
            id="filter"
            name="filter"
            onClick={this.handleClick}
          />
        </div>
      </form>
    );
  }
}
