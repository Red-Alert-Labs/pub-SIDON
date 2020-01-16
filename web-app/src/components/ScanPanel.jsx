import React, { Component } from "react";

class ScanPanel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <h3 className="inline">Select the Binary/Object file</h3>
        </div>

        <div className="wrapper">
          <div className="file-upload">
            <input type="file" />
            <i className="fa fa-arrow-up"></i>
          </div>
        </div>
        <div className="wrapper">
          <button className="btn btn-primary pl-4 pr-4">Scan</button>
        </div>
      </React.Fragment>
    );
  }
}

export default ScanPanel;
