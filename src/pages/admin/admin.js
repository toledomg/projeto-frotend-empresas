import {
  getUser,
  getAllDepart,
  listDepartCompanies,
  getAllUsers,
  deleteUserAdmin,
  editUserAdmin,
  validateUser,
} from "../../scripts/request.js";
import { listAllCompanies } from "../../scripts/render.js";
import { renderEditUser, editUser } from "./userAdmin.js";
import {
  createDepart,
  deleteDepart,
  btnDelDepart,
  editDepart,
  departPeople,
} from "./departAdmin.js";

import { homeDirection, adminSecurity } from "../../scripts/security.js";

import {
  modalCreateDepart,
  createDepartModal,
  openDepartModal,
  editUserModal,
  modalEditUser,
  editDepartModal,
  delDepartModal,
} from "./../../scripts/modal.js";

import { renderFooter } from "./../../scripts/footer.js";

// variaveis globais
const user = getUser() || {};
let { token } = user;
const allDepart = await getAllDepart(token);
//

export function logout() {
  const btnLogOut = document.getElementById("btnLogOut");
  btnLogOut.addEventListener("click", () => {
    localStorage.clear("@kenzie:user");
    window.open("/", "_parent");
    localtion.reload();
  });
}

// Depart
export async function renderCardsDepart(departments) {
  const adminPage = document.getElementById("adminDepart");
  const dialogModal = document.getElementById("editDepart");
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
    const btnEditar = document.createElement("img");
    const btnApagar = document.createElement("img");

    btnAbrir.src = "../../pages/img/visualizar.svg";
    btnEditar.src = "../../pages/img/edit_black.svg";
    btnApagar.src = "../../pages/img/lixeira.svg";

    divBtn.classList.add("depart__info--edit");

    const id = e.uuid;
    const depart = e;

    btnAbrir.classList.add("openDepart", "cursor-pointer");
    btnAbrir.addEventListener("click", async () => {
      document.getElementById("DepartOpen").showModal();
      await departPeople(depart);
    });

    btnEditar.classList.add("editDepart", "cursor-pointer");
    btnEditar.addEventListener("click", async () => {
      console.log(`Editar Depart`);
      const formEditDepart = document.getElementById("editFormDepart");
      const textArea = document.createElement("textarea");
      textArea.value = e.description;
      textArea.placeholder = "Descrição";
      textArea.name = "description";
      textArea.required = "true";

      const btnSalvar = document.createElement("button");
      btnSalvar.classList.add(
        "btn--cadastro",
        "button__5",
        "text-1",
        "color-1",
        "size-100"
      );
      btnSalvar.innerText = "Salvar Alterações";

      formEditDepart.append(textArea, btnSalvar);
      dialogModal.showModal();
      editDepart(id, textArea);
    });

    btnApagar.classList.add("delelatarDepart", "cursor-pointer");
    btnApagar.addEventListener("click", async () => {
      const textDelModal = document.getElementById("text-delModal");
      textDelModal.insertAdjacentHTML(
        "beforeend",
        `
      <h1 class="title-1 espacamento-40">
      Realmente deseja deletar o Departamento ${e.name} e demitir seus funcionários?
      </h1>
      `
      );
      document.getElementById("delDepart").showModal();
      const btnModal = document.getElementById("btnDeletedDepart");
      btnModal.addEventListener("click", async () => {
        document.getElementById("delDepart").close();
        await deleteDepart(e);
        await btnDelDepart();
        // location.reload();
      });
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
  const dialogModal = document.getElementById("editUser");

  boxUser.innerHTML = "";

  const allUsers = await getAllUsers(token);

  const Users = allUsers.filter((element) => !element.is_admin);

  const Departments = await listDepartCompanies(token);
  // console.log(await Departments);

  Users.forEach((e) => {
    const departUser = Departments.filter(
      (element) => element.uuid == e.department_uuid
    );
    const li = document.createElement("li");

    const divDados = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const span = document.createElement("span");

    divDados.classList.add("depart__info--desc");
    h1.classList.add("text-1");

    h1.innerText = e.username;
    p.innerText = e.professional_level || "";
    span.innerText = e.kind_of_work || "";

    const divBtn = document.createElement("div");
    const imgEdit = document.createElement("img");
    const imgDel = document.createElement("img");

    divBtn.classList.add("depart__info--edit");

    const id = e.uuid;

    imgEdit.classList.add("editUser", "cursor-pointer");
    imgEdit.id = "editarUser";
    imgEdit.src = "../../pages/img/edit_blue.svg";
    imgEdit.alt = "editar-user";
    imgEdit.addEventListener("click", async () => {
      // console.log(`Esse é o uuid: ${e.uuid}, do Usuário ${e.username}`);
      dialogModal.showModal();
      editUser(id);
    });

    imgDel.classList.add("delUser", "cursor-pointer");
    imgDel.id = "deleteUser";
    imgDel.src = "../../pages/img/lixeira.svg";
    imgDel.alt = "deletar-user";
    imgDel.addEventListener("click", async () => {
      const textDelUserModal = document.getElementById("text-delUserModal");
      textDelUserModal.insertAdjacentHTML(
        "beforeend",
        `
        <h1 class="title-1 espacamento-40">
        Realmente deseja remover o usuário ${e.username}?
        </h1>
      `
      );

      document.getElementById("delUser").showModal();
      const btnDelUser = document.getElementById("delUser");
      btnDelUser.addEventListener("click", async () => {
        document.getElementById("delUser").close();
        await deleteUserAdmin(token, id);
        renderEditUser();
        location.reload();
      });
    });

    divDados.append(h1, p, span);
    divBtn.append(imgEdit, imgDel);
    li.append(divDados, divBtn);
    boxUser.appendChild(li);
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
openDepartModal();

createDepart();

const departTextArea = async () => {
  const formEditDepart = document.getElementById("editFormDepart");
  const textArea = document.createElement("textarea");
  textArea.classList.add("seletor", "box1--kind_of_work", "text-5--input");
  textArea.value = e.description;
  textArea.placeholder = "Descrição";
  textArea.name = "description";
  textArea.required = "true";

  const btnSalvar = document.createElement("button");
  btnSalvar.classList.add(
    "btn--cadastro",
    "button__5",
    "text-1",
    "color-1",
    "size-100"
  );
  btnSalvar.innerText = "Salvar Alterações";

  formEditDepart.append(textArea, btnSalvar);
};

logout();

homeDirection();
await adminSecurity();

renderFooter();
