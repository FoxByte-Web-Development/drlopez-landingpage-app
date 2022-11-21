import React from "react";
import PropTypes from "prop-types";
import "./button-component.css";

const Button = ({ children, variant = "primary", onClickHandler }) => {
  return (
    <button onClick={onClickHandler} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default Button;
