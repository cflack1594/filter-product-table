import { CheckBox } from "./CheckBox";
import { PriceSearch } from "./PriceSearch";
import { SearchBar } from "./SearchBar";
import React from "react";
import PropTypes from "prop-types";

export class Filters extends React.Component {
  static propTypes = {
    filterInStock: PropTypes.func,
    searchForItem: PropTypes.func,
    searchForPrice: PropTypes.func,
  };
  render() {
    return (
      <div>
        <SearchBar searchForItem={this.props.searchForItem} />
        <PriceSearch searchForPrice={this.props.searchForPrice} />
        <CheckBox filterInStock={this.props.filterInStock} />
      </div>
    );
  }
}
