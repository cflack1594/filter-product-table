import React from "react";
import "./App.css";
import { FilterableTable } from "components";

export class App extends React.Component {
  render() {
    return <div className="App">{FilterableTable}</div>;
  }
}
