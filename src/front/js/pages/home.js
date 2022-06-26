import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import background from "../../img/cool-background.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <div
        className="w-25 col-auto p-5 text-center rounded-3"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <a type="button" className="btn btn-lg m-3" href="/login">
          Log In
        </a>
        <a type="button" className="btn btn-lg m-3" href="/signup">
          Sign Up
        </a>
      </div>
    </div>
  );
};
