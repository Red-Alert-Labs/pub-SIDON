import React from "react";
import PropTypes from "prop-types";

const FormButton = ({ disabled, onClick, text, type }) => (
  <div className="col s12 padding-0 center-align">
    <button
      type={type}
      className="waves-effect waves-light btn"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  </div>
);

FormButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string
};

FormButton.defaultProps = {
  disabled: false,
  text: "Button",
  onClick: () => {},
  type: "button"
};

export default FormButton;
