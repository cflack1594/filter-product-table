import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import React, { Fragment } from "react";
import PropTypes from "prop-types";

export class FilterableTable extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    eventHandlers: PropTypes.object,
  };

  render() {
    return (
      <Fragment>
        <SearchBar
          products={this.props.products}
          eventHandlers={this.props.eventHandlers}
        />
        <ProductTable products={this.props.products} />
      </Fragment>
    );
  }
}
