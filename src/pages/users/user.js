import {
  getUser,
  getPerfilUser,
  getAllCompanies,
  getCoWorkers,
  getDepartUser,
} from "../../scripts/request.js";

import { editPerfilModal } from "../../scripts/modalPerfil.js";

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
${e.kind_of_work}
</div>

`
  );

  const btnModal = document.getElementById("editBtn");
  btnModal.addEventListener("click", () => {
    document.getElementById("editPerfil").showModal();
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

usersPageUser();
perfilPageUser(token);
editPerfilModal();
