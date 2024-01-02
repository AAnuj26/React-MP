import Board from "./components/Board";
import Input from "./components/input";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <h1 className="appHeading">To Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div className="board-container">
        {taskList.map((task, index) => (
          <Board
            key={index}
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
}

export default App;
