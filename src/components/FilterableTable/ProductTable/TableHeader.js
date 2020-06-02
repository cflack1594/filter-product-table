import React, { Fragment } from "react";
import PropTypes from "prop-types";
export class TableHeader extends React.Component {
  static propTypes = {
    category: PropTypes.string,
  };

  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}
