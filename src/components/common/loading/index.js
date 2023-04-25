import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="w-full h-full">
      <Spinner animation="grow" variant="success" />
    </div>
  );
};

export default Loading;
