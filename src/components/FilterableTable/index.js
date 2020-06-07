import { ProductTable } from "./ProductTable";
import { Filters } from "./Filters";
import React, { Fragment } from "react";
import * as API from "../../API";
import { removeChar } from "../../utils";
export class FilterableTable extends React.Component {
  state = {
    searchItem: "",
    searchPrice: "",
    inStockOnly: false,
    products: [],
  };

  filterCBS = {
    inStockOnly: (product) => {
      return this.state.inStockOnly ? product.stocked : true;
    },

    searchItem: (product) => {
      return this.state.searchItem
        ? product.name
            .toLowerCase()
            .includes(this.state.searchItem.toLowerCase())
        : true;
    },

    searchPrice: (product) => {
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
    this.setState({ searchItem: searchInput });
  };

  searchForPrice = (searchInput) => {
    this.setState({ searchPrice: searchInput });
  };

  filterInStockOnly = () => {
    this.setState({ inStockOnly: !this.state.inStockOnly });
  };

  async componentDidMount() {
    try {
      this.setState({ products: await API.get() });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    let filteredProducts;

    const activeFilters = Object.keys(this.state)
      .reduce((acc, name) => {
        if (name === "products") return acc;
        if (this.state[name]) acc.push(name);
        return acc;
      }, [])
      .reduce((acc, name) => {
        if (this.state[name]) acc.push(this.filterCBS[name]);
        return acc;
      }, []);

    if (activeFilters.length) {
      filteredProducts = activeFilters.reduce(
        (acc, filterCB) => acc.filter((product) => filterCB(product)),
        this.state.products
      );
    } else filteredProducts = this.state.products;

    return (
      <Fragment>
        <Filters
          inputData={this.inputData}
          filterInStockOnly={this.filterInStockOnly}
          searchForItem={this.searchForItem}
          searchForPrice={this.searchForPrice}
        />
        <ProductTable products={filteredProducts} />
      </Fragment>
    );
  }
}
