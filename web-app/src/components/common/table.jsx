import React, { Component } from "react";

class Table extends Component {
  state = {};
  render() {
    const { headers, contents } = this.props;
    return (
      <table className="table table-bordered" width="100%" cellSpacing="0">
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contents.map(row => (
            <tr key={"x"}>
              {row.map(data => (
                <td key={data}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
