import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import React from "react";
import PropTypes from "prop-types";

export class ProductTable extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  render() {
    const table = [];
    let checkCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== checkCategory)
        table.push(<TableHeader category={product.category} />);

      table.push(<TableRow name={product.name} price={product.price} />);

      checkCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    );
  }
}
