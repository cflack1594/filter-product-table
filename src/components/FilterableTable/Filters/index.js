import { CheckBox } from "./CheckBox";
import { PriceSearch } from "./PriceSearch";
import { SearchBar } from "./SearchBar";
import { InputFilter } from "./InputFilter";
import React from "react";
import PropTypes from "prop-types";

export class Filters extends React.Component {
  static propTypes = {
    filterInStockOnly: PropTypes.func,
    searchForItem: PropTypes.func,
    searchForPrice: PropTypes.func,
    inputData: PropTypes.array,
  };

  render() {
    return (
      <form>
        <InputFilter
          inputData={this.props.inputData}
          searchForItem={this.props.searchForItem}
          searchForPrice={this.props.searchForPrice}
          filterInStockOnly={this.props.filterInStockOnly}
        />
      </form>
    );
  }
}

/*
        <SearchBar searchForItem={this.props.searchForItem} />
        <PriceSearch searchForPrice={this.props.searchForPrice} />
        <CheckBox filterInStock={this.props.filterInStock} />
*/
