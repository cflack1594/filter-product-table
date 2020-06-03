import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import React, { Fragment } from "react";
import * as API from "../../API";
export class FilterableTable extends React.Component {
  state = {
    searchTerm: "",
    isChecked: false,
    products: [],
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

  searchForItem = (searchInput) => {
    this.setState({ searchTerm: searchInput });
  };

  filterInStock = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    return (
      <Fragment>
        <SearchBar
          products={this.state.products}
          filterInStock={this.filterInStock}
          searchForItem={this.searchForItem}
        />
        <ProductTable
          products={this.state.products}
          checkInStock={this.state.isChecked}
          searchItem={this.state.searchTerm}
        />
      </Fragment>
    );
  }
}
