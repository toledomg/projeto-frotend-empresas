import { deleteDepartAdmin } from "./request.js";
import { getUser, getAllDepart } from "./request.js";
import { renderCardsDepart } from "../pages/admin/admin.js";

// variaveis globais
// const baseUrl = "http://localhost:6278";
const user = getUser() || {};
let { token } = user;
const allDepart = await getAllDepart(token);

// const id = e.uuid;

//
export async function deleteDepart(department) {
  const btnDelete = document.getElementById("adminDepart");

  const id = department.uuid;

  await deleteDepartAdmin(token, id);
}

export async function btnDelDepart() {
  const adminPage = document.getElementById("adminDepart");

  const department = await getAllDepart(token);
  adminPage.innerHTML = "";
  renderCardsDepart(department);
}
