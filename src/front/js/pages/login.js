import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  const handleClick = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch(
      "https://3001-4geeksacade-reactflaskh-mzipyrry7u0.ws-us42.gitpod.io/api/token",
      options
    )
      .then((response) => {
        if (response.status === 200) return response.json();
        else alert("Error");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>

      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            value={email}
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            value={password}
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
