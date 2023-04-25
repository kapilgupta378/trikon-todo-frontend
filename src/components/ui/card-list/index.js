import React from "react";
import TodoCard from "../todo-card";
import PropTypes from "prop-types";
import Loading from "../../common/loading";

const CardList = ({ todoList, loading }) => {
  if (loading) {
    return <Loading />;
  }

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
      {todoList.map((data) => {
        return <TodoCard key={data._id} data={data} />;
      })}
    </div>
  );
};

CardList.propTypes = {
  todoList: PropTypes.array,
  loading: PropTypes.bool,
};
export default CardList;
