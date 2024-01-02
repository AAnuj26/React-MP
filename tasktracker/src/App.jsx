import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { useDrop } from "react-dnd";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    let array = localStorage.getItem("taskList");
    let parsedTemp = JSON.parse(array);
    if (array) {
      setTaskList(parsedTemp);
    }
  }, []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) =>
      addToCompleted(
        item.id,
        item.projectName,
        item.taskDescription,
        item.timestamp,
        item.duration
      ),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addToCompleted = (
    id,
    projectName,
    taskDescription,
    timestamp,
    duration
  ) => {
    const moveTask = taskList.filter((task) => id === task.id);
    setCompleted((completed) => [
      ...completed,
      { moveTask, projectName, taskDescription, timestamp, duration },
    ]);
  };

  return (
    <>
      <h1>The Task Tracker</h1>
      <p>Hi there!</p>
      <p>Click </p>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <p>add a new task</p>
      <div>
        <div>
          <h2 className="todo-title">To Do:</h2>
          {taskList.map((task, i) => (
            <ToDo
              key={i}
              task={task}
              index={i}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </div>
        <div ref={drop}>
          <h2>Completed</h2>
          {completed.map((task, i) => (
            <ToDo
              key={i}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
