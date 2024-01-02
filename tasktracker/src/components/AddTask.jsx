import React from "react";
import { useState } from "react";

const AddTask = ({ setTaskList, taskList }) => {
  const [addModal, setAddModal] = useState(false);

  const [projectName, setProjectName] = useState("");

  const [taskDescription, setTaskDescription] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "projectName") {
      setProjectName(value);
      setErrorMessage("");
    }
    if (name === "projectName" && value === "") {
      setErrorMessage("Enter project name to continue");
    }
    if (name === "taskDescription") {
      setTaskDescription(value);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!projectName) {
      setErrorMessage("Enter project name to continue");
    } else {
      let timestamp = new Date();
      let tempList = taskList;
      tempList.push({
        projectName,
        taskDescription,
        timestamp: timestamp,
        duration: 0,
      });
      localStorage.setItem("taskList", JSON.stringify(tempList));
      window.location.reload();
      setAddModal(false);
      setProjectName("");
      setTaskDescription("");
    }
  };

  return (
    <>
      <button type="button" onClick={() => setAddModal(true)}>
        +New
      </button>
      {addModal ? (
        <>
          <div>
            <div>
              <div>
                <h3>Add New Task</h3>
                <button onClick={() => setAddModal(false)}>x</button>
              </div>
              <form>
                <div>
                  <label>Project Name</label>
                  <input
                    id="project-name"
                    name="projectName"
                    type="text"
                    placeholder="project name"
                    value={projectName}
                    onChange={handleInput}
                    required
                  />
                </div>
                <p>{errorMessage}</p>
                <div>
                  <label>Task Description</label>
                  <textarea
                    id="task-description"
                    name="taskDescription"
                    rows="5"
                    placeholder="Task description"
                    value={taskDescription}
                    onChange={handleInput}
                  ></textarea>
                </div>
              </form>
            </div>
            <div>
              <button onClick={handleAdd}>Add Task</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddTask;
