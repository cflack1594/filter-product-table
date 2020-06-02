import React from "react";
import PropTypes from "prop-types";
export class SearchBar extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    eventHandlers: PropTypes.object,
  };

  render() {
    return (
      <form>
        <label htmlFor="search">search</label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={this.props.eventHandlers.handleChange}
        />
        <div>
          {""}
          <label htmlFor="filter">filter</label>
          <input
            type="checkbox"
            id="filter"
            name="filter"
            onClick={this.props.eventHandlers.handleClick}
          />
        </div>
      </form>
    );
  }
}
