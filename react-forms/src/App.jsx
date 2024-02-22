import { useState } from "react";

useState;
function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });
  const handleInput = (e) => {
    userInfo[e.target.name] = e.target.value;

    console.log(userInfo);
  };
  const styles = {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    justifyContent: "center",
  };
  return (
    <>
      <h2>React Forms</h2>
      <form action="">
        <fieldset>
          <legend>About you</legend>
          <br />
          <div style={styles}>
            <label>Whats your name?</label>

            <br />
            <input
              type="name"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={handleInput}
            />
            <br />
            <input
              type="name"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={handleInput}
            />
          </div>
          <br />
          <div style={styles}>
            <label>Whats your Email?</label>
            <br />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              onChange={handleInput}
            />
          </div>
          <br />
          <div style={styles}>
            <label>Whats your date of birth?</label>
            <br />
            <input
              type="date"
              name="dob"
              id="dob"
              max="2005-01-01"
              min="1920-01-01"
              placeholder="Date of birth"
              onChange={handleInput}
            />
          </div>
          <br />
          <div style={styles}>
            <label> Whats your gender?</label>
            <br />
            <select
              name="gender"
              id="gender"
              onChange={handleInput}
              defaultValue="gender"
            >
              <option value="gender" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>Prompts</legend>
          <div style={styles}>
            <label>Select a Prompt</label>
            <br />
            <select name="prompt1" id="prompt1" onChange={handleInput}>
              <option value="Dating me is like...">Dating me is like...</option>
              <option value="Fact about me that surprises people:">
                Fact about me that surprises people:
              </option>
              <option value="I want someone who:">I want someone who:</option>
              <option value="I spend most of my money on:">
                I spend most of my money on:
              </option>
              <option value="Most spontaneous thing I've done:">
                Most spontaneous thing I&apos;ve done:
              </option>
              <option value="We're the same type of weird if...">
                We&apos;re the same type of weird if...
              </option>
            </select>
            <br />
            <textarea
              name=""
              id=""
              placeholder=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
