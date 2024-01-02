import React from "react";
import { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };
  return (
    <>
      <form className="form" action="">
        <input
          className="input"
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="addButton" onClick={handleAddTask}>
          Add
        </button>
      </form>
    </>
  );
};

export default Input;
