import { deleteDepartAdmin } from "./request.js";
import { getUser, getAllDepart } from "./request.js";

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
