import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, type, placeholder, label, name, onChange, error }) => (
  <div className="input-field col s12">
    {error && <span>{error}</span>}
    <input
      value={value || ""}
      placeholder={placeholder}
      type={type}
      className="validate"
      name={name}
      onChange={onChange}
    />

    <label className="active" htmlFor="first_name2">
      {label}
    </label>
  </div>
);

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.any
};

Input.defaultProps = {
  type: "text",
  error: null
};

export default Input;
