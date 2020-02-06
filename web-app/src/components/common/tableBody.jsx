import React, { Component } from "react";

class TableBody extends Component {
  state = {};

  createKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>SOME</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
