import {
  getUser,
  getAllDepart,
  listDepartCompanies,
  getAllUsers,
} from "../../scripts/request.js";
import { listAllCompanies } from "../../scripts/render.js";
import { deleteDepart } from "../../scripts/deleteDepart.js";
import { createDepart } from "../../scripts/createDepart.js";

import {
  modalCreateDepart,
  createDepartModal,
  modalOpenDepart,
  openDepartModal,
} from "./../../scripts/modal.js";

// variaveis globais
// const baseUrl = "http://localhost:6278";
const user = getUser() || {};
let { token } = user;
const allDepart = await getAllDepart(token);
//

// Validação de Token e direcionamento

function validDashAdmin() {
  if (!token) {
    window.location.href = "/src/pages/login.html";
  }
}
validDashAdmin();

// Login / LogOut
export function logout() {
  const btnLogOut = document.getElementById("btnLogOut");
  btnLogOut.addEventListener("click", () => {
    localStorage.clear("@kenzie:user");
  });
}
logout();

// Depart

export async function renderCardsDepart(departments) {
  const adminPage = document.getElementById("adminDepart");

  adminPage.innerHTML = "";

  Array.from(departments).forEach((e) => {
    const lista = document.createElement("li");

    const divDados = document.createElement("div");
    const h1Name = document.createElement("h1");
    const pDesc = document.createElement("p");
    const spanEmpresa = document.createElement("span");

    divDados.classList.add("depart__info--desc");
    h1Name.classList.add("text-1");

    h1Name.innerText = e.name;
    pDesc.innerText = e.description;
    spanEmpresa.innerText = e.companies.name;

    const divBtn = document.createElement("div");
    const btnAbrir = document.createElement("img");
    btnAbrir.addEventListener("click", () => {
      modalOpenDepart();
    });

    const btnEditar = document.createElement("img");
    const btnApagar = document.createElement("img");

    btnAbrir.src = "../../pages/img/visualizar.svg";
    btnEditar.src = "../../pages/img/edit_black.svg";
    btnApagar.src = "../../pages/img/lixeira.svg";

    divBtn.classList.add("depart__info--edit");
    btnAbrir.classList.add("openDepart");
    btnEditar.classList.add("editDepart");
    btnApagar.classList.add("delDepart");
    btnApagar.addEventListener("click", async () => {
      await deleteDepart(e);
      adminPage.innerHTML = "";
      renderCardsDepart(departments); // parei aqui erro ao renderizar PAGE
    });

    divDados.append(h1Name, pDesc, spanEmpresa);
    divBtn.append(btnAbrir, btnEditar, btnApagar);
    lista.append(divDados, divBtn);
    adminPage.appendChild(lista);
  });
}

renderCardsDepart(allDepart);
renderSelectDepart();

// select admin home
export async function renderSelectDepart() {
  const select = document.getElementById("setorDepart");

  const sections = await listAllCompanies();

  sections.forEach((e) => {
    const option = document.createElement("option");
    option.value = e.uuid;
    option.innerText = e.name;

    select.appendChild(option);
  });

  select.addEventListener("input", async (e) => {
    const value = e.target.value;

    if (value == "") {
      const departments = await getAllDepart(token);

      renderCardsDepart(departments);
    } else {
      const departments = await listDepartCompanies(token, value);

      renderCardsDepart(departments);
    }
  });
}

//  Depart Users -----

export async function createCarUser() {
  const li = document.createElement("li");
  const divMain = document.createElement("div");
  const h1 = document.createElement("h1");
  const level = document.createElement("span");
  const typeWork = document.createElement("span");
  const divBtn = document.createElement("div");
  const imgEdit = document.createElement("img");
  const imgDel = document.createElement("img");

  h1.classList.add("text-1");
  divBtn.classList.add("depart__info--edit");
  imgEdit.classList.add("editUser");
  imgDel.classList.add("delUser");

  h1.innerText = e.username;
  level.innerText = e.professional_level || "";
  if (e) {
    typeWork.innerText = e.kind_of_work;
  } else {
    typeWork.innerText = "";
  }

  divMain.appendChild(h1, level, typeWork);
  divBtn.appendChild(imgEdit, imgDel);
  li.append(divMain, divBtn);
}

export async function renderAllUsers() {
  const boxUser = document.getElementById("user__container");

  boxUser.innerHTML = "";

  const allUsers = await getAllUsers(token);

  const Users = allUsers.filter((element) => !element.is_admin);

  const Departments = await listDepartCompanies(token);
  // console.log(await Departments);

  Users.forEach((e) => {
    const departUser = Departments.filter(
      (element) => element.uuid == e.department_uuid
    );
    // console.log(departUser);

    boxUser.insertAdjacentHTML(
      "afterbegin",
      `
      <li>
      <div class="depart__info--desc">
        <h1 class="text-1">${e.username}</h1>
        <span>${e.professional_level || ""}</span>
        <span>${e.kind_of_work || ""}</span>
      </div>
      <div class="depart__info--edit">

        <img class="editUser" src="../../pages/img/edit_blue.svg" alt="editar">
        <img class="delUser" src="../../pages/img/lixeira.svg" alt="deletar">
      </div>
    </li>
     `
    );
  });
}

export async function mostrarModalDepartOpen(department) {
  const allUsers = await getAllUsers(token);

  const usersDepart = allUsers.filter(
    (e) => e.department_uuid == department.uuid
  );

  // console.log(usersDepart);
}

// Funções Modals
renderAllUsers();
modalCreateDepart();
createDepartModal();
// modalOpenDepart();
openDepartModal();

createDepart();
// deleteDepart();
