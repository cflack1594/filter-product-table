import { ProductTable } from "./ProductTable";
import { Filters } from "./Filters";
import React, { Fragment } from "react";
import * as api from "api";
import { getStateProxy, removeChar } from "utils";
export class FilterableTable extends React.Component {
  state = {
    searchItem: "",
    searchPrice: "",
    inStockOnly: false,
    products: [],
  };

  stateProxy = getStateProxy(this);

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
      name: "inStockOnly",
    },
  ];

  searchOnChange = (searchInput, name) => {
    if (name === "inStockOnly") {
      this.setState({ [name]: !this.state[name] });
    } else this.setState({ [name]: searchInput });
  };

  async componentDidMount() {
    try {
      this.setState({ products: await api.get() });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const activeFilters = Object.keys(this.state)
      .filter((stateName) => Object.keys(this.filterCBS).includes(stateName))
      .reduce((acc, name) => {
        if (this.state[name]) acc.push(this.filterCBS[name]);
        return acc;
      }, []);

    const filteredProducts = activeFilters.reduce(
      (acc, filterCB) => acc.filter((product) => filterCB(product)),
      this.state.products
    );

    return (
      <Fragment>
        <Filters
          inputData={this.inputData}
          searchOnChange={this.searchOnChange}
        />
        <ProductTable products={filteredProducts} />
      </Fragment>
    );
  }
}
