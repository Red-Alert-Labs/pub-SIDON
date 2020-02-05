import React, { Component } from "react";
import NavButton from "./navButton";

class SideBar extends Component {
  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="sidebar-brand-text mx-3">SIDON Admin</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <NavButton
          label={"Dashboard"}
          path={"/"}
          icon={"fas fa-fw fa-tachometer-alt"}
        />

        <NavButton label="Scans" path="/scans" icon="fas fa-fw fa-poll-h" />
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Manage</div>

        <NavButton label="Users" path="/users" icon="fas fa-fw fa-users" />

        <NavButton
          label="Requirements List"
          path="/requirements"
          icon="fas fa-fw fa-clipboard"
        />

        <NavButton
          label="Common Criteria"
          path="/commoncriteria"
          icon="fas fa-fw fa-table"
        />

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    );
  }
}

export default SideBar;
