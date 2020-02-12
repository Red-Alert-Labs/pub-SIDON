import React, { Component } from "react";
import Card from "./common/Card";
import ScanPanel from "./ScanPanel";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#todo"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate
            Report
          </a>
        </div>
        {/* InfoCard Row */}
        <Card title="Scan" body={<ScanPanel {...this.props} />} />
      </div>
    );
  }
}

export default Dashboard;
