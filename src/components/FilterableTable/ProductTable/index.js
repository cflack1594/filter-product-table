import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import React from "react";

export class ProductTable extends React.Component {
  render() {
    return (
      <div>
        {TableHeader}
        {TableRow}
      </div>
    );
  }
}
