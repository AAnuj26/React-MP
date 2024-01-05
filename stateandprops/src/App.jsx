import { useState } from "react";
import ChangeName from "./ChangeName";

function App() {
  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <h1>State and Props</h1>
      <label htmlFor="username">Enter your name here:</label>
      <input
        id="username"
        type="text"
        placeholder="My wonderful name"
        onChange={handleInput}
      />
      <ChangeName setUsername={setUsername} />
      <p>hi there, {username}</p>
      <p>{username} you are doing great today</p>
    </>
  );
}

export default App;
