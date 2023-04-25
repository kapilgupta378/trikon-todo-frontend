import "./App.css";
import { useEffect, useState } from "react";
import Button from "./components/common/button";
import CreateModal from "./components/common/create-modal";
import CardList from "./components/ui/card-list";
import { toast } from "react-toastify";
import useTodo from "./hooks/useTodo";
function App() {
  const {
    todoList,
    isTodoLoading,
    setIsTodoLoading,
    postTodoAsync,
    refetchData,
  } = useTodo();
  const [openTodoModal, setOpenTodoModal] = useState(false);
  console.log(todoList);

  const handleSubmitTask = (data) => {
    try {
      postTodoAsync(data);
      refetchData();
      toast.success("Todo added.");
    } catch (error) {
      setIsTodoLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Button className="m-3" onClick={() => setOpenTodoModal(true)}>
        Add Todo
      </Button>
      <CardList todoList={todoList} loading={isTodoLoading} />
      <CreateModal
        show={openTodoModal}
        onHide={() => setOpenTodoModal(false)}
        submitTask={handleSubmitTask}
      />
    </div>
  );
}

export default App;
