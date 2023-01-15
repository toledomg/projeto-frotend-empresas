import { login, createUser, getUser } from "./request.js";

// Global Var
const user = getUser() || {};
const { token } = user;
const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

//

function loginForm() {
  const inputs = document.querySelectorAll(".box__formulario > input");
  const button = document.querySelector("#btnLogin");
  const loginUser = {};

  button.addEventListener("click", async (event) => {
    event.preventDefault();

    inputs.forEach((input) => {
      loginUser[input.name] = input.value;
    });

    const request = await login(loginUser);

    // localStorage.setItem("@kenzie:user", JSON.stringify(request));
    // setLocalStorage("@kenzie:user", request);
  });
}

function createUserForm() {
  const inputs = document.querySelectorAll(".signup > input");
  const selects = document.querySelectorAll(".signup > select");

  const button = document.querySelector("#btnLogin");
  const newUser = {};

  button.addEventListener("click", async (event) => {
    event.preventDefault();

    inputs.forEach((input) => {
      newUser[input.name] = input.value;
    });

    selects.forEach((input) => {
      newUser[input.name] = input.value;
    });

    const request = await createUser(newUser);
    localStorage.setItem("@kenzie:user", JSON.stringify(request));
  });

  return newUser;
}

loginForm();
