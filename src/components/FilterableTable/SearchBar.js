import React, { Fragment } from "react";

export class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="search">search</label>
        <input type="text" id="search" name="search" />
        <div>
          {""}
          <label htmlFor="filter">filter</label>
          <input type="checkbox" id="filter" name="filter" />
        </div>
      </form>
    );
  }
}
