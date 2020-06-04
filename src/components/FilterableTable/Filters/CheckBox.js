import React from "react";
import PropTypes from "prop-types";

export class CheckBox extends React.Component {
  static propTypes = {
    filterInStock: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.props.filterInStock();
  };

  render() {
    return (
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
    );
  }
}
