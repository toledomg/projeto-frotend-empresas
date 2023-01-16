import { toast } from "../../scripts/toast.js";
import { listAllCompanies } from "../../scripts/render.js";
import { renderEditUser } from "./userAdmin.js";
import {
  listDepartCompanies,
  createDepartAdmin,
  deleteDepartAdmin,
  getUser,
  getAllDepart,
  editDepartAdmin,
  getAllUsers,
  hireUserDepart,
  dimissUserDepart,
  getUseDesempregado,
} from "../../scripts/request.js";

import { renderCardsDepart } from "./admin.js";

// variaveis globais
const user = getUser() || {};
let { token } = user;
const red = "#d65745";
const green = "#55b938";
const allDepart = await getAllDepart(token);

// Department

export async function createDepart() {
  const fechalModal = document.querySelector(".modal__Create-empresa");
  const select = document.querySelector("#setor2");

  // inserindo dados no select empresas
  const sections = await listAllCompanies();

  sections.forEach((e) => {
    const option = document.createElement("option");
    option.value = e.uuid;
    option.innerText = e.name;

    select.appendChild(option);
  });

  // capturando o formulário 'form'
  const formCreateDepart = document.querySelector("#create-depart");

  formCreateDepart.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dados = [...formCreateDepart.elements];

    const body = {};

    dados.forEach((e) => {
      if (e.name) {
        body[e.name] = e.value;
      }
    });

    if (select.value != "") {
      await createDepartAdmin(token, body);
      fechalModal.close();

      const selectDash = document.getElementById("setorDepart");

      if (selectDash.value == "") {
        const departments = await getAllDepart(token);
        renderCardsDepart(departments);
      } else {
        const departments = await listDepartCompanies(token, value);
        renderCardsDepart(departments);
      }
    } else {
      toast("error", "Selecione uma Empresa");
      // toast("Selecione uma Empresa", red);
    }
  });
}

//

export async function editDepart(userId, textArea) {
  const adminPage = document.getElementById("adminDepart");
  const formEditDepart = document.getElementById("editFormDepart");

  const id = userId;

  formEditDepart.addEventListener("submit", async (dados) => {
    dados.preventDefault();

    const body = { [textArea.name]: textArea.value };
    // console.log(body);
    // console.log(id);

    await editDepartAdmin(token, id, body);

    // Renderizar Page
    const adminPage = document.getElementById("adminDepart");
    const department = await getAllDepart(token);
    adminPage.innerHTML = "";

    renderCardsDepart(department);

    const modal = document.getElementById("editDepart");
    modal.close();
    formEditDepart.reset();
    window.location.reload();
  });
}

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

export async function departPeople(depart) {
  const allUsers = await getAllUsers(token);
  const contratados = allUsers.filter((e) => e.department_uuid == depart.uuid);

  const titulo = document.getElementById("titulo");
  const h1Titulo = document.createElement("h1");
  h1Titulo.innerText = depart.name;
  titulo.appendChild(h1Titulo);

  const description = document.getElementById("description");
  const desc = document.createElement("h1");
  desc.innerText = depart.description;
  description.appendChild(desc);

  const empresaTitulo = document.getElementById("empresa");
  const empresa = document.createElement("h1");
  empresa.innerText = depart.companies.name;
  empresaTitulo.appendChild(empresa);
  //
  contratados.forEach((e) => {
    const ulListUser = document.getElementById("listUser");
    // console.log(ulListUser);

    const li = document.createElement("li");
    const divContainer = document.createElement("div");
    const divClass = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const span = document.createElement("span");

    const button = document.createElement("button");

    li.id = "listCandidate";
    divClass.classList.add("modal__cards--title");
    h1.classList.add("text-1");

    h1.innerText = e.username;
    p.innerText = e.professional_level || "";
    span.innerText = depart.companies.name || "";

    button.id = "desligar";
    button.classList.add("btn--cadastro", "button__4", "text-1", "color-4");
    button.innerText = "Desligar";
    button.addEventListener("click", async () => {
      await dimissUserDepart(token, e.uuid);
      document.getElementById("listCandidate").remove();
      window.location.reload();
    });

    divClass.append(h1, p, span);
    divContainer.append(divClass, button);
    li.appendChild(divContainer);
    ulListUser.appendChild(li);
  });
  selectUserDepart(depart);
}

export async function selectUserDepart(depart) {
  const ulListUser = document.getElementById("listUser");
  const select = document.getElementById("departModalCreate");

  const sections = await getUseDesempregado(token);

  sections.forEach((e) => {
    const option = document.createElement("option");
    option.value = e.uuid;
    option.innerText = e.username;

    select.appendChild(option);
  });

  const btnContratar = document.getElementById("btnContratar");
  btnContratar.addEventListener("click", async (e) => {
    e.preventDefault();

    const body = { department_uuid: depart.uuid };

    if (select.value != "") {
      body["user_uuid"] = select.value;
      await hireUserDepart(token, body);
      document.getElementById("DepartOpen").close();
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
  });
}
