import React from "react";
import PropTypes from "prop-types";

export class InputFilter extends React.Component {
  static propTypes = {
    searchOnChange: PropTypes.func,
    inputData: PropTypes.array,
  };

  handleChange = (name) => {
    console.log("beep", name);
    this.props.searchOnChange(document.getElementById(name).value, name);
  };

  render() {
    const inputs = this.props.inputData.map((targetInput) => {
      return (
        <div key={targetInput.name}>
          <label htmlFor={targetInput.name}>{targetInput.name}</label>
          <input
            type={targetInput.type}
            id={targetInput.name}
            name={targetInput.name}
            onChange={() => this.handleChange(targetInput.name)}
          />
        </div>
      );
    });

    return inputs;
  }
}
