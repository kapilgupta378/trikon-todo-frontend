import { useEffect, useState } from "react";
import { getAllTodo, postTodo } from "../services/apis/todoApi";

const useTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const [isTodoLoading, setIsTodoLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsTodoLoading(true);
      const response = await getAllTodo();
      setTodoList(response.data);
      setIsTodoLoading(false);
    } catch (error) {
      setIsTodoLoading(false);
    }
  };

  const postTodoAsync = async (data) => {
    debugger;
    setIsTodoLoading(true);
    const response = await postTodo(data);
    setIsTodoLoading(false);

    return response;
  };

  return {
    todoList,
    isTodoLoading,
    setIsTodoLoading,
    postTodoAsync,
    refetchData: fetchData,
  };
};

export default useTodo;
