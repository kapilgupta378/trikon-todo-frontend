import React from "react";
import { Card } from "react-bootstrap";

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

export default TodoCard;
