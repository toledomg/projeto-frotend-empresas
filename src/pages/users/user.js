import { toasts } from "../../scripts/toast.js";
import { homeDirection, userSecurity } from "../../scripts/security.js";

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

// Var Globais
const user = getUser() || {};
let { token } = user;
//

export async function perfilPageUser(token) {
  const info = document.getElementById("userInfo");
  const e = await getPerfilUser(token);

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
  if (e.error.includes("verify")) {
    console.log("deu certo");
    cuteToast({
      type: "error", // or 'info', 'error', 'warning'
      title: "ERRO",
      message:
        "Esse cadastro não existe mais, por favor, faça um novo cadastro",
      timer: 5000,
    });
    setTimeout(() => {
      window.open("../cadastro.html", "_parent");
    }, 2000);
  }
  return info;
}

export async function departName() {
  const Users = await getPerfilUser(token);

  const allDeparts = await getDepartUser(token);
  console.log(allDeparts.name);

  const depart = await getCoWorkers(token);

  const departName = depart.find((e) => e.uuid == Users.department_uuid);

  console.log(departName);
  console.log(departName.users);

  const departments = allDeparts.departments;
  const departsUser = departments.find((e) => e.uuid == Users.department_uuid);
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
}

export async function editUserDash() {
  const section = document.getElementById("userInfo");
  const form = document.getElementById("editUserDash");

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
      setTimeout(() => {
        location.reload();
      }, 5000);
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

renderFooter();
logout();
homeDirection();
await userSecurity();

usersPageUser();
perfilPageUser(token);
editPerfilModal();
