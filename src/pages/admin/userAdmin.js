import { getUser, editUserAdmin } from "../../scripts/request.js";
import { renderAllUsers } from "./admin.js";

// editUser();

const user = getUser() || {};
let { token } = user;

export async function editUser(userId) {
  const formEditUser = document.getElementById("editFormUser");
  const modal = document.getElementById("editUser");
  const id = userId;
  // console.log(formEditUser);

  formEditUser.addEventListener("submit", async (dados) => {
    dados.preventDefault();

    const dadosForm = [...formEditUser];

    const body = {};
    if (kind_of_work.value != "" || professional_level.value != "") {
      dadosForm.forEach((e) => {
        if (e.name && e.value != "") {
          body[e.name] = e.value;
        }
      });
    }
    await editUserAdmin(token, id, body);
    formEditUser.reset();
    modal.close();
    // if(!false){}
    renderEditUser();
  });
}

export async function closeEditModal() {
  const boxUser = document.getElementById("user__container");
  boxUser.innerHTML = "";
  document.querySelector("#editUser").close();
  renderAllUsers();
}

export async function renderEditUser() {
  const boxUser = document.getElementById("user__container");
  boxUser.innerHTML = "";
  renderAllUsers();
}
