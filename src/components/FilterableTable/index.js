import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import React, { Fragment } from "react";
export class FilterableTable extends React.Component {
  state = {
    searchTerm: "",
    isChecked: false,
    products: [
      {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football",
      },
      {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball",
      },
      {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball",
      },
      {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch",
      },
      {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5",
      },
      {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7",
      },
    ],
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
