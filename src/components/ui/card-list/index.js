import React from "react";
import TodoCard from "../todo-card";
import PropTypes from "prop-types";

const CardList = ({ todoList }) => {
  if (todoList.length === 0) {
    // returns when todo list is empty
    return (
      <div className="text-center mt-5">
        <h6>Data not found, add todo from above button.</h6>
      </div>
    );
  }
  return (
    <div className="d-flex container mt-5  flex-wrap">
      {todoList.map((data, idx) => {
        return <TodoCard key={idx} data={data} />;
      })}
    </div>
  );
};

CardList.propTypes = {
  todoList: PropTypes.array,
};
export default CardList;
