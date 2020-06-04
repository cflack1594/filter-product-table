import React from "react";
import PropTypes from "prop-types";

export class PriceSearch extends React.Component {
  static propTypes = {
    searchForPrice: PropTypes.func,
  };

  handleChange = () => {
    this.props.searchForPrice(document.getElementById("searchPrice").value);
  };

  render() {
    return (
      <div>
        <label htmlFor="searchPrice">search for price</label>
        <input
          type="text"
          id="searchPrice"
          name="searchPrice"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
