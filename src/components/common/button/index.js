import React from "react";
import { Button as BootstrapBtn } from "react-bootstrap";
import PropTypes from "prop-types";

const Button = ({ children, ...rest }) => {
  return (
    <BootstrapBtn {...rest} variant="outline-success">
      {children}
    </BootstrapBtn>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
