import React, { Component } from "react";

class ResultBar extends Component {
  state = {};
  render() {
    const { title, value } = this.props;
    return (
      <React.Fragment>
        <h4 className="small font-weight-bold">
          {title} <span className="float-right">{value}%</span>
        </h4>
        <div className="progress mb-4">
          <div
            className="progress-bar bg-success"
            style={{ width: value + "%" }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </React.Fragment>
    );
  }
}

export default ResultBar;
