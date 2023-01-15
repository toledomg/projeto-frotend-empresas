import { login, getUser } from "./request.js";

// Global Var
const user = getUser() || {};
const { token } = user;
const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

//

export async function loginForm() {
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

loginForm();
