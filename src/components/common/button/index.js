import React from "react";
import { Button as BootstrapBtn } from "react-bootstrap";

const Button = ({ children, ...rest }) => {
  return (
    <BootstrapBtn {...rest} variant="outline-success">
      {children}
    </BootstrapBtn>
  );
};

export default Button;
