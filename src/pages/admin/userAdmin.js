import { getUser } from "../../scripts/request.js";
import { renderAllUsers } from "./admin.js";

// editUser();

const user = getUser() || {};
let { token } = user;

export async function renderEditUser() {
  const boxUser = document.getElementById("user__container");
  boxUser.innerHTML = "";
  renderAllUsers();
}
