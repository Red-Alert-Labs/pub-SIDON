import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class ResultsTable extends Component {
  state = {};

  columns = [
    { path: "id", label: "ID" },
    {
      path: "name",
      label: "Name",
      content: scan => <Link to={`/scans/${scan.id}`}>{scan.name}</Link>
    },
    { path: "uploaded_at", label: "Date" }
  ];
  render() {
    const { scans } = this.props;
    return <Table data={scans} columns={this.columns} />;
  }
}

export default ResultsTable;
