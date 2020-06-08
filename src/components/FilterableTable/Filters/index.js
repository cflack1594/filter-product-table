import { InputFilter } from "./InputFilter";
import React from "react";
import PropTypes from "prop-types";

export class Filters extends React.Component {
  static propTypes = {
    searchOnChange: PropTypes.func,
    inputData: PropTypes.array,
  };

  render() {
    return (
      <form>
        <InputFilter
          inputData={this.props.inputData}
          searchOnChange={this.searchOnChange}
        />
      </form>
    );
  }
}
