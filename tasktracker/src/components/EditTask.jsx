import React, { useEffect } from "react";
import { useState } from "react";
const EditTask = ({ task, index, taskList, setTaskList }) => {
  const [editModal, setEditModal] = useState(false);

  const [projectName, setProjectName] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    setProjectName(task.projectName);
    setTaskDescription(task.taskDescription);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "projectName") {
      setProjectName(value);
      setErrorMessage("");
    }
    if (name === "taskDescription") setTaskDescription(value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1, {
      projectName: projectName,
      taskDescription: taskDescription,
      timestamp: task.timestamp,
      duration: task.duration,
    });
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
  };

  return (
    <>
      <button onClick={() => setEditModal(true)}>Edit</button>
      {editModal ? (
        <>
          <div>
            <div>
              <h3>Edit</h3>
              <button onClick={() => setEditModal(false)}>x</button>
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
            <div>
              <button onClick={handleUpdate}>Update Task</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditTask;
