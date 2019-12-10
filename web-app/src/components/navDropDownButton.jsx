import React, { Component } from "react";

class NavDropDownButton extends Component {
  state = {};

  render() {
    let classElement = "nav-link";
    let aria = "false";
    let internalClass = "collapse";
    if (!this.props.expand) {
      classElement += " collapsed";
    } else {
      aria = "true";
      internalClass += " show";
    }

    return (
      <li className="nav-item">
        <a
          className={classElement}
          href="#todo"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded={aria}
          aria-controls="collapseTwo"
          onClick={this.props.onClick}
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div
          id="collapseTwo"
          className={internalClass}
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">
              Buttons
            </a>
            <a className="collapse-item" href="cards.html">
              Cards
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default NavDropDownButton;
