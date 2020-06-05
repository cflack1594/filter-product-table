import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import React from "react";
import PropTypes from "prop-types";

export class ProductTable extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    filterCBS: PropTypes.object,
  };

  render() {
    let checkCategory = null;

    const table = this.props.products
      .filter((product) => {
        let filtered = true;

        Object.keys(this.props.filterCBS).forEach((CBName) => {
          if (filtered) filtered = this.props.filterCBS[CBName](product);
        });

        return filtered;
      })
      .map((product) => {
        let ret = [];
        if (product.category !== checkCategory)
          ret.push(
            <TableHeader key={product.category} category={product.category} />
          );
        checkCategory = product.category;
        ret.push(<TableRow key={product.name} product={product} />);

        return ret;
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
