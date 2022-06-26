const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      token: null,
    },
    actions: {
      signup: (formData, history) => {
        fetch(
          "https://3001-ricardoyepe-4geeksauthe-0lptx3sjp9q.ws-us47.gitpod.io/api/signup",
          {
            method: "POST",
            body: formData,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Data From Flux", data);
            history.push("/");
            window.location.reload();
          })
          .catch((error) =>
            console.log("Ha ocurrido un error en el registro", error)
          );
      },
      login: (formData, history) => {
        fetch(process.env.BACKEND_URL + `/api/token`, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ token: data });
            localStorage.setItem("token", JSON.stringify(data));
            //history.push("/user");
            window.location.reload();
          })
          .catch((error) => console.log("Login Error", error));
      },
    },
  };
};

export default getState;
