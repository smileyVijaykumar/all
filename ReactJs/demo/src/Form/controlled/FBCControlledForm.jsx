import React, { useState } from "react";

const FBCControlledForm = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  let handlesubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(state.username, state.email, state.password);
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={(e) => setState({ username: e.target.value })}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={(e) => setState({ email: e.target.value })}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={(e) => setState({ password: e.target.value })}
          />
        </div>

        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default FBCControlledForm;
