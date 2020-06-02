import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import React from "react";

export class FilterableTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}
