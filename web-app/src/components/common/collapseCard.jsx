import React, { Component } from "react";

class CollapseCard extends Component {
  state = { expand: false };

  handleToggleCard = () => {
    const expand = !this.state.expand;
    console.log("Click");
    this.setState({ expand });
  };

  render() {
    let classElement = "d-block card-header py-3";
    let aria = "false";
    let internalClass = "collapse";
    if (!this.state.expand) {
      classElement += " collapsed";
    } else {
      aria = "true";
      internalClass += " show";
    }
    return (
      <div className="card shadow mb-1">
        <a
          href="#collapseCardExample"
          className={classElement}
          data-toggle="collapse"
          role="button"
          aria-expanded={aria}
          aria-controls="collapseCardExample"
          onClick={this.handleToggleCard}
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
