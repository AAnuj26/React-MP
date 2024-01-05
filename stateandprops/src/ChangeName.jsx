import React from "react";

const ChangeName = ({ setUsername, username }) => {
  const removeInput = () => {
    //function to change the name
    setUsername("");
    document.getElementById("username").value = "";
  };
  return (
    <>
      <button onClick={removeInput}>hide my name </button>
    </>
  );
};

export default ChangeName;
