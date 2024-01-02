import React from "react";

const Board = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    let removeindex = taskList.indexOf(task);
    taskList.splice(removeindex, 1);
    setTaskList((currentTask) =>
      currentTask.filter((todo) => index === removeindex)
    );
  };
  return (
    <>
      <div className="board">
        <p>{task}</p>
        <button className="deleteButton" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Board;
