import React, { Fragment } from "react";
import PropTypes from "prop-types";

export class TableRow extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
  };

  render() {
    return (
      <Fragment>
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.price}</td>
        </tr>
      </Fragment>
    );
  }
}
