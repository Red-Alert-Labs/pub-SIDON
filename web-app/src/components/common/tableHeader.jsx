import React, { Component } from "react";

class TableHeader extends Component {
  state = {};
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th key={column.path || column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
