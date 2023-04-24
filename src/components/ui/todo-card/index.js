import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const TodoCard = ({ data }) => {
  return (
    <Card style={{ width: "18rem", margin: " 30px" }}>
      <Card.Body>
        <Card.Title>Todo Details</Card.Title>
        <p>
          Task Name : <span>{data.taskName}</span>
        </p>
        <p>
          Comment <span>{data.comment}</span>
        </p>
        <p>
          Date <span>{data.date}</span>
        </p>
      </Card.Body>
    </Card>
  );
};

TodoCard.propTypes = {
  data: PropTypes.object,
};
export default TodoCard;
