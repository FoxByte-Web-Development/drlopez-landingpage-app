import React from "react";
import PropTypes from "prop-types";
import "./button-component.css";

export default function Button({ children, variant = "primary" }) {
  return <button className={`btn btn-${variant}`}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};
