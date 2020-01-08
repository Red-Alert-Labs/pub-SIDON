import React, { Component } from "react";

class AlertLine extends Component {
  state = {};
  render() {
    const { message, alertType } = this.props;
    let alertClass = "info";
    console.log(alertType);
    if (alertType === "error") {
      alertClass = "row alert text-danger";
    }
    return (
      <div>
        <label className={alertClass}>{message}</label>
      </div>
    );
  }
}

export default AlertLine;
