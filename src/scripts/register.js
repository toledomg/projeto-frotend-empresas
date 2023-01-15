import { createUser } from "./request.js";

export async function createUserForm() {
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

createUserForm();
