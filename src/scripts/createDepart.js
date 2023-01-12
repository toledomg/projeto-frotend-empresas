import { toast, toasts } from "./toast.js";
import { listAllCompanies } from "./render.js";
import {
  listDepartCompanies,
  getAllDepart,
  getUser,
  createDepartAdmin,
} from "./request.js";
import { renderCardsDepart } from "./../pages/admin/admin.js";

//  variaveis
const user = getUser() || {};
const { token } = user;
const red = "#d65745";
const green = "#55b938";

//

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
      // toast("error", "Selecione uma Empresa");
      toast("Selecione uma Empresa", red);
    }
  });
}
