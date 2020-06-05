import React from "react";
import PropTypes from "prop-types";

export class InputFilter extends React.Component {
  static propTypes = {
    filterInStock: PropTypes.func,
    searchForItem: PropTypes.func,
    searchForPrice: PropTypes.func,
    inputData: PropTypes.array,
  };

  handleEvents = (name) => {
    switch (name) {
      case "searchItem":
        this.props.searchForItem(document.getElementById("searchItem").value);
        break;
      case "searchPrice":
        this.props.searchForPrice(document.getElementById(name).value);
        break;
      case "filterStock":
        this.props.filterInStock();
        break;
      default:
        break;
    }
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
            onChange={() => this.handleEvents(targetInput.name)}
          />
        </div>
      );
    });

    return inputs;
  }
}
