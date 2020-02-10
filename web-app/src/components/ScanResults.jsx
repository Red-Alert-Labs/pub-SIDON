import React, { Component } from "react";
import Card from "./common/Card";
import ResultsTable from "./resultsTable";
import { getScans } from "../services/scansService";

class ScanResults extends Component {
  state = {
    scans: []
  };

  async componentDidMount() {
    const { data: scans } = await getScans();
    this.setState({ scans });
  }
  render() {
    return (
      <div className="container-fluid">
        <Card
          title="Results"
          body={<ResultsTable scans={this.state.scans} />}
        />
      </div>
    );
  }
}

export default ScanResults;
