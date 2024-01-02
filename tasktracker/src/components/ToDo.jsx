import React from "react";
import EditTask from "./EditTask";
import { useState } from "react";
import { useEffect } from "react";
import { useDrag } from "react-dnd";

const ToDo = ({ task, index, taskList, setTaskList }) => {
  const [time, setTime] = useState(task.duration);

  const [running, setRunning] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todo",
    item: {
      id: index,
      projectName: task.projectName,
      taskDescription: task.taskDescription,
      timestamp: task.timestamp,
      duration: task.duration,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStop = () => {
    setRunning(false);
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1, {
      projectName: task.projectName,
      taskDescription: task.taskDescription,
      timestamp: task.timestamp,
      duration: time,
    });
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
  };

  const handleDelete = (itemID) => {
    let removeindex = taskList.indexOf(itemID);
    taskList.splice(removeindex, 1);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
  };

  return (
    <>
      <div className="todo-card" ref={drag}>
        {task.projectName}
        <EditTask
          task={task}
          index={index}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <p className="description">{task.taskDescription}</p>
        <div>
          <div>
            <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
          </div>
          <div>
            {running ? (
              <>
                <button onClick={handleStop}>Stop</button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setRunning(true);
                  }}
                >
                  Start
                </button>
              </>
            )}
            <button
              onClick={() => {
                setTime(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
    </>
  );
};

export default ToDo;
