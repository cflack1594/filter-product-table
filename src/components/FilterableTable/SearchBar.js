import React from "react";
import PropTypes from "prop-types";
export class SearchBar extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    searchForItem: PropTypes.func.isRequired,
    filterInStock: PropTypes.func.isRequired,
  };

  handleChange = () => {
    this.props.searchForItem(document.getElementById("search").value);
  };

  handleClick = () => {
    this.props.filterInStock();
  };

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
          <label htmlFor="filter">Filter In Stock</label>
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
