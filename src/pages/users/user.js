import { toasts } from "../../scripts/toast.js";

import {
  getUser,
  getPerfilUser,
  getAllCompanies,
  getCoWorkers,
  getDepartUser,
  editUser,
} from "../../scripts/request.js";

import { editPerfilModal } from "../../scripts/modalPerfil.js";

import { renderFooter } from "../../scripts/footer.js";
renderFooter();
logout();
// Var Globais
const user = getUser() || {};
let { token } = user;

//
export async function perfilPageUser(token) {
  const info = document.getElementById("userInfo");
  const e = await getPerfilUser(token);
  // console.log(e);

  info.insertAdjacentHTML(
    "beforeend",
    `
<div>
<h1 class="text-1">
${e.username}
</h1>
<a>
  <img id="editBtn" src="../../pages/img/edit_black.svg" alt="btn-edit">
</a>
</div>

<div>
<h2>
Email: ${e.email}
</h2>
${e.professional_level}
<h2>
</p>
${e.kind_of_work || ""}
</div>

`
  );

  const btnModal = document.getElementById("editBtn");
  btnModal.addEventListener("click", () => {
    document.getElementById("editPerfil").showModal();
    editUserDash();
  });

  return info;
}

export async function departName() {
  const Users = await getPerfilUser(token);
  // console.log([Users]);
  const allDeparts = await getDepartUser(token);
  console.log(allDeparts.name);

  const depart = await getCoWorkers(token);

  const departName = depart.find((e) => e.uuid == Users.department_uuid);

  console.log(departName);
  console.log(departName.users);

  const departments = allDeparts.departments;
  const departsUser = departments.find((e) => e.uuid == Users.department_uuid);
  console.log(departsUser.name);

  // console.log(`Empresa uuid: => ${e.sectors.uuid}`);
  // console.log(`User uuid: ===> ${Users.department_uuid}`);
}
// departName();

export async function usersPageUser() {
  const boxUsers = document.querySelector(".contratado__container1");
  const Users = await getPerfilUser(token);

  const allDeparts = await getDepartUser(token);

  const departments = allDeparts.departments;
  const departsUser = departments.find((e) => e.uuid == Users.department_uuid);

  const headers = document.getElementById("headerEmpresa");
  headers.insertAdjacentHTML(
    "beforeend",
    `
  <h1 class="text-3">
  ${allDeparts.name} - ${departsUser.name}
  </h1>
  `
  );

  const depart = await getCoWorkers(token);
  const departUsers = depart.find((e) => e.uuid == Users.department_uuid);
  const userFiltrados = departUsers.users.filter((e) => e.uuid != Users.uuid);

  userFiltrados.forEach((e) => {
    const userRender = document.getElementById("userColegas");
    userRender.insertAdjacentHTML(
      "beforeend",
      `
    <li>
    <h1 class="text-1">
    ${e.username}
    </h1>
    <span>
    ${e.professional_level}
    </span>
  </li>
  `
    );
  });
  // console.log(depart);
}

export async function editUserDash() {
  const section = document.getElementById("userInfo");
  const form = document.getElementById("editUserDash");
  // console.log(form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dados = [...form.elements];
    const body = {};
    let cont = 0;

    dados.forEach((e) => {
      if (e.name && e.value != "") {
        body[e.name] = e.value;
        cont++;
      }
    });
    if (cont > 0) {
      console.log(body);
      await editUser(token, body);
      document.getElementById("editPerfil").remove();
      await perfilPageUser(token);
      section.innerHTML = "";
      perfilPageUser(token);
    }
  });
}

// Login / LogOut
export function logout() {
  const btnLogOut = document.getElementById("btnLogOut");
  btnLogOut.addEventListener("click", () => {
    localStorage.clear("@kenzie:user");
    window.open("/", "_parent");
  });
}
logout();

usersPageUser();
perfilPageUser(token);
editPerfilModal();
