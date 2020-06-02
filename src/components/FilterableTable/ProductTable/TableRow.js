import React from "react";
import PropTypes from "prop-types";

export class TableRow extends React.Component {
  static propTypes = {
    product: PropTypes.object,
  };

  render() {
    return (
      <tr key={this.props.product.name}>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}
