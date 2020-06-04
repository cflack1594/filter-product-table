import { ProductTable } from "./ProductTable";
import { Filters } from "./Filters";
import React, { Fragment } from "react";
import * as API from "../../API";
import { removeChar } from "../../utils";
export class FilterableTable extends React.Component {
  state = {
    searchTerm: "",
    searchPrice: "",
    isChecked: false,
    products: [],
  };

  filterCBS = {
    checkIfInStock: (product) => {
      if (this.state.isChecked) return product.stocked;
      else return true;
    },

    searchItems: (product) => {
      if (this.state.searchTerm)
        return product.name
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase());
      else return true;
    },

    searchPrices: (product) => {
      if (this.state.searchPrice)
        return (
          Number.parseFloat(removeChar(product.price, "$")) >=
          Number.parseFloat(this.state.searchPrice)
        );
      else return true;
    },
  };

  searchForItem = (searchInput) => {
    this.setState({ searchTerm: searchInput });
  };

  searchForPrice = (searchInput) => {
    this.setState({ searchPrice: searchInput });
  };

  filterInStock = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const products = await API.get();
      this.setState({ products: products });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Fragment>
        <Filters
          filterInStock={this.filterInStock}
          searchForItem={this.searchForItem}
          searchForPrice={this.searchForPrice}
        />
        <ProductTable
          products={this.state.products}
          filterCBS={this.filterCBS}
        />
      </Fragment>
    );
  }
}
