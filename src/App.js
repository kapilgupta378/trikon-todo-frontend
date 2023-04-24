import "./App.css";
import { useEffect, useState } from "react";
import Button from "./components/common/button";
import TodoCard from "./components/ui/todo-card";
import CreateModal from "./components/common/create-modal";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [openTodoModal, setOpenTodoModal] = useState(false);
  useEffect(() => {
    setTodoList([1, 2, 3]);
  }, []);

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Button className="m-3" onClick={() => setOpenTodoModal(true)}>
        Add Todo
      </Button>
      <div className="d-flex container mt-5  flex-wrap">
        {todoList.map((_, idx) => {
          return <TodoCard key={idx} />;
        })}
      </div>

      <CreateModal open={openTodoModal} close={() => setOpenTodoModal(false)} />
    </div>
  );
}

export default App;
