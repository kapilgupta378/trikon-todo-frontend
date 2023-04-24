import "./App.css";
import { useEffect, useState } from "react";
import Button from "./components/common/button";
import CreateModal from "./components/common/create-modal";
import CardList from "./components/ui/card-list";
import { toast } from "react-toastify";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [openTodoModal, setOpenTodoModal] = useState(false);
  console.log(todoList);
  useEffect(() => {
    setTodoList([]);
  }, []);

  const handleSubmitTask = (data) => {
    setTodoList((prev) => [...prev, data]);
    toast.success("Todo added.");
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Button className="m-3" onClick={() => setOpenTodoModal(true)}>
        Add Todo
      </Button>
      <CardList todoList={todoList} />
      <CreateModal
        show={openTodoModal}
        onHide={() => setOpenTodoModal(false)}
        submitTask={handleSubmitTask}
      />
    </div>
  );
}

export default App;
