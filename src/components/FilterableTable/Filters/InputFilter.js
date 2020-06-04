import React from "react";
import PropTypes from "prop-types";

export class InputFilter extends React.Component {
  static propTypes = {
    inputData: PropTypes.array,
  };

  handleClick = () => {
    this.props.inputData.sendTo();
  };

  handleChange = () => {
    this.props.inputData.sendTo(EventTarget.value);
  };

  render() {
    const inputs = this.props.inputData.map((thing) => {
      return (
        <div key={thing.name}>
          <label htmlFor={thing.name}>{thing.name}</label>
          <input
            type={thing.type}
            id={thing.name}
            name={thing.name}
            event={thing.handler}
          />
        </div>
      );
    });

    return <div>{inputs}</div>;
  }
}
