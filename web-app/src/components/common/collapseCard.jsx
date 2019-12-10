import React, { Component } from "react";

class CollapseCard extends Component {
  state = {};
  render() {
    let classElement = "d-block card-header py-3";
    let aria = "false";
    let internalClass = "collapse";
    if (!this.props.expand) {
      classElement += " collapsed";
    } else {
      aria = "true";
      internalClass += " show";
    }
    return (
      <div className="card shadow mb-4">
        <a
          href="#collapseCardExample"
          className={classElement}
          data-toggle="collapse"
          role="button"
          aria-expanded={aria}
          aria-controls="collapseCardExample"
          onClick={this.props.onClick}
        >
          <h6 className="m-0 font-weight-bold text-primary">
            {this.props.title}
          </h6>
        </a>

        <div className={internalClass}>
          <div className="card-body">{this.props.cardbody}</div>
        </div>
      </div>
    );
  }
}

export default CollapseCard;
