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
      return this.state.isChecked ? product.stocked : true;
    },

    searchItems: (product) => {
      return this.state.searchTerm
        ? product.name
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase())
        : true;
    },

    searchPrices: (product) => {
      return this.state.searchPrice
        ? Number.parseFloat(removeChar(product.price, "$")) <=
            Number.parseFloat(this.state.searchPrice)
        : true;
    },
  };

  inputData = [
    {
      type: "text",
      name: "searchItem",
    },
    {
      type: "text",
      name: "searchPrice",
    },
    {
      type: "checkBox",
      name: "filterStock",
    },
  ];

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
          inputData={this.inputData}
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
