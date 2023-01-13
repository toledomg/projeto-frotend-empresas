import {
  getUser,
  setLocalStorage,
  getAllDepart,
  getAllUsers,
} from "./request.js";

// variaveis globais
const baseUrl = "http://localhost:6278";
const user = getUser() || {};
let { token } = user;
const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

//  Empresas por Setor
export async function getSectors() {
  const responseJson = await fetch(baseUrl + `/sectors`, {
    method: "GET",
    headers: requestHeaders,
  });

  const response = await responseJson.json();

  return response.map((e) => e.description);
}

export const listCompaniesBySectors = async (sector) => {
  try {
    const responseJson = await fetch(baseUrl + `/companies/${sector}`);
    const response = await responseJson.json();

    return response;
  } catch (err) {
    toast("error", "Erro no get do Setor empresas");
  }
};

//  Empresas ALL Setor

export const listAllCompanies = async () => {
  try {
    const responseJson = await fetch(baseUrl + `/companies`);
    const response = await responseJson.json();

    return response;
  } catch (err) {
    toast("error", "Erro no get do ALL empresas");
  }
};

export const renderCardsHome = (companies) => {
  const mainPage = document.querySelector(".container__info");

  mainPage.innerHTML = "";

  companies.forEach((e) => {
    mainPage.insertAdjacentHTML(
      "beforeend",
      `  
    <div class="home__right--info">
    <h1 class="text-3">${e.name}</h1>
    <span class="text-4">${e.opening_hours}</span>
    <button class="btn_setor_bussiness text-4">${e.sectors.description}</button>
    </div>
     `
    );
  });
};

// selects home

export async function renderSelect() {
  const select = document.getElementById("setor");

  const sections = await getSectors();

  sections.forEach((e) => {
    const option = document.createElement("option");
    option.value = e;
    option.innerText = e;

    select.appendChild(option);
  });

  select.addEventListener("input", async (e) => {
    const value = e.target.value;

    if (value == "") {
      const companies = await listAllCompanies();
      renderCardsHome(companies);
    } else {
      const companies = await listCompaniesBySectors(value);
      renderCardsHome(companies);
    }
  });
}
