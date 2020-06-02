import React, { Fragment } from "react";
import PropTypes from "prop-types";

export class TableRow extends React.Component {
  static propTypes = {
    product: PropTypes.object,
  };

  render() {
    return (
      <Fragment>
        <tr key={this.props.product.name}>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      </Fragment>
    );
  }
}
