function App() {
  const handleInput = (e) => {};
  const styles = {
    display: "flex",
    flexDirection: "column",
    width: "200px",
  };
  return (
    <>
      <h2>React Forms</h2>
      <form action="">
        <fieldset>
          <legend>About you</legend>
          <div style={styles}>
            <label>Whats your name?</label>
            <br />
            <input
              type="Name"
              id="FirstName"
              name="FirstName"
              placeholder="First Name"
              onChange={handleInput}
            />
            <br />

            <input
              type="Name"
              id="LastName"
              name="LastName"
              placeholder="Last Name"
              onChange={handleInput}
            />
            <br />

            <label>Whats your Email?</label>
            <br />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              onChange={handleInput}
            />
            <br />

            <label>Whats your date of birth?</label>
            <br />

            <input
              type="date"
              name="dob"
              id="dob"
              placeholder="Date of birth"
              onChange={handleInput}
            />
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
