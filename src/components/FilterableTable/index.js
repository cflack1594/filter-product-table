import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import React, { Fragment } from "react";
import PropTypes from "prop-types";

export class FilterableTable extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  render() {
    return (
      <Fragment>
        <SearchBar products={this.props.products} />
        <ProductTable products={this.props.products} />
      </Fragment>
    );
  }
}
