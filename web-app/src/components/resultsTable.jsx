import React, { Component } from "react";
import Table from "./common/table";

class ResultsTable extends Component {
  state = {};

  columns = [
    { path: "id", label: "ID" },
    { path: "name", label: "Name" },
    { path: "date", label: "Date" }
  ];
  render() {
    const { scans } = this.props;
    return <Table data={scans} columns={this.columns} />;
  }
}

export default ResultsTable;
