import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ label, path, icon }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={path}>
        <i className={icon}></i>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default NavButton;
