import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import background from "../../img/cool-background.png";

export const Login = () => {
  const { actions } = useContext(Context);

  const history = useHistory();
  let flag = false;
  const [loginform, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...loginform };
    newState[name] = value;
    setLoginForm(newState);
  };

  const handleValidate = (loginform) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!loginform.email) {
      errors.email = "Email es requerido!";
      flag = true;
    } else if (!regex.test(loginform.email)) {
      errors.email = "Tu correo no es valido!";
    }
    if (!loginform.password) {
      errors.password = "Password es requerido!";
      flag = true;
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginErrors(handleValidate(loginform));
    if (flag === false) {
      let formData = new FormData();
      formData.append("email", loginform.email);
      formData.append("password", loginform.password);
      actions.login(formData, history);
      e.target.reset();
      return (flag = true);
    } else return false;
  };

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <div
        className="w-25 col-auto p-4 text-center rounded-3"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="my-3">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <p className="errors-login">{loginErrors.email}</p>
        <div className="mb-3">
          {" "}
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className="errors-login">{loginErrors.password}</p>
        </div>
        <button
          type="submit"
          className="btn btn-dark d-grid gap-2 col-6 mx-auto"
        >
          Login
        </button>
      </div>
    </div>
  );
};
