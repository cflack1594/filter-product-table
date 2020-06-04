import React from "react";
import PropTypes from "prop-types";
export class SearchBar extends React.Component {
  static propTypes = {
    searchForItem: PropTypes.func.isRequired,
  };

  handleChange = () => {
    this.props.searchForItem(document.getElementById("searchItem").value);
  };

  render() {
    return (
      <div>
        <label htmlFor="searchItem">search for item</label>
        <input
          type="text"
          id="searchItem"
          name="searchItem"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
